import { DirectiveBinding, ObjectDirective, nextTick, ref } from 'vue'
import { WMOptions } from '../../utils/water-mark-option'
import { Util } from '../../utils/util'

/**
 * v-water-mask
 */

let defaultSettings = new WMOptions()

function createCanvas() {
  const c = document.createElement('canvas')
  c.style.display = 'none'
  document.body.appendChild(c)
  return c
}

// 寻找切换断点
function findBreakPoint(text: string, width: number, context: any) {
  let min = 0
  let max = text.length - 1
  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    // measureText()方法是基于当前字型来计算字符串宽度的
    const middleWidth = context.measureText(text.substring(0, middle)).width
    const oneCharWiderThanMiddleWidth = context.measureText(text.substring(0, middle + 1)).width
    if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
      return middle
    }
    if (middleWidth < width) {
      min = middle + 1
    } else {
      max = middle - 1
    }
  }
  return -1
}

// 根据最大宽度切割文字
function breakLinesForCanvas(context: any, text: string, width: number, font: string) {
  const result = []
  let maxWidth = 0

  if (font) {
    context.font = font
  }

  let breakPoint = findBreakPoint(text, width, context)
  while (breakPoint !== -1) {
    result.push(text.substring(0, breakPoint))
    text = text.substring(breakPoint)
    maxWidth = width
    breakPoint = findBreakPoint(text, width, context)
  }

  if (text) {
    result.push(text)
    const lastTextWidth = context.measureText(text).width
    maxWidth = maxWidth !== 0 ? maxWidth : lastTextWidth
  }

  return {
    textArr: result,
    maxWidth: maxWidth
  }
}

// 将绘制好的canvas转成图片
function convertCanvasToImage(canvas: any, el: HTMLElement) {
  if (Util.isUndefinedOrNull(el)) {
    console.error('请绑定渲染容器')
  } else {
    const imgData = canvas.toDataURL('image/png')
    const divMask = el
    divMask.style.cssText = `position: ${defaultSettings.position}; left:0; top:0; right:0; bottom:0; z-index:9999; pointer-events:none;opacity:${defaultSettings.opacity}`
    divMask.style.backgroundImage = 'url(' + imgData + ')'
    divMask.style.backgroundPosition = defaultSettings.left + 'px ' + defaultSettings.top + 'px'
  }
}

function draw(c: any, settings: WMOptions) {
  const ctx = c.getContext('2d')
  // 切割超过最大宽度的文本并获取最大宽度
  const textArr = settings.textArr || [] // 水印文本数组
  let wordBreakTextArr: Array<any> = []
  const maxWidthArr: Array<number> = []
  textArr.forEach(text => {
    const result = breakLinesForCanvas(ctx, text + '', settings.maxWidth!, settings.font!)
    wordBreakTextArr = wordBreakTextArr.concat(result.textArr)
    maxWidthArr.push(result.maxWidth)
  })

  maxWidthArr.sort((a, b) => {
    return b - a
  })

  // 根据需要切割结果，动态改变canvas的宽和高
  const maxWidth = Math.max(maxWidthArr[0], defaultSettings.minWidth!)
  const lineHeight = settings.lineHeight!
  const height = wordBreakTextArr.length * lineHeight
  const degToPI = (Math.PI * settings.deg!) / 180
  const absDeg = Math.abs(degToPI)
  // 根据旋转后的矩形计算最小画布的宽高
  const hSinDeg = height * Math.sin(absDeg)
  const hCosDeg = height * Math.cos(absDeg)
  const wSinDeg = maxWidth * Math.sin(absDeg)
  const wCosDeg = maxWidth * Math.cos(absDeg)

  c.width = parseInt(hSinDeg + wCosDeg + settings.marginRight! + '', 10)
  c.height = parseInt(wSinDeg + hCosDeg + settings.marginBottom! + '', 10)

  console.log(c.width, c.height)

  // 宽高重置后，样式也需重置
  ctx.font = settings.font
  ctx.fillStyle = settings.fillStyle
  ctx.textBaseline = 'hanging' // 默认是alphabetic,需改基准线为贴着线的方式

  // 移动并旋转画布
  ctx.translate(0, wSinDeg)
  ctx.rotate(degToPI)

  // 绘制文本
  wordBreakTextArr.forEach((text, index) => {
    ctx.fillText(text, 0, lineHeight * index)
  })
}

const waterMask = function (element: HTMLElement, binding: DirectiveBinding) {
  defaultSettings = Object.assign({}, defaultSettings, binding.value || {})
  defaultSettings.minWidth = Math.min(defaultSettings.maxWidth!, defaultSettings.minWidth!) // 重置最小宽度
  const textArr = defaultSettings.textArr
  if (!Util.isArray(textArr)) {
    throw Error('水印文本必须放在数组中！')
  }
  const c = createCanvas() // 动态创建隐藏的canvas
  draw(c, defaultSettings) // 绘制文本
  convertCanvasToImage(c, element) // 转化图像
}

const observerTemp = ref()

function disablePatchWaterMask(el: HTMLElement) {
  // 观察器的配置（需要观察什么变动）
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true
  }
  /* MutationObserver 是一个可以监听DOM结构变化的接口。 */
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  // 当观察到变动时执行的回调函数
  const callback = function (mutationsList: any, observer: any) {
    for (const mutation of mutationsList) {
      const type = mutation.type
      switch (type) {
        case 'childList':
          if (mutation.removedNodes.length > 0) {
            // 有删除
            mutation.target.append(mutation.removedNodes[0])
          }
          break
        case 'attributes':
          console.log(mutation)
          // mutation.target.setAttribute('style', mutation.target.oldValue);
          break
        default:
          break
      }
    }
  }
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback)
  // 以上述配置开始观察目标节点

  observer.observe(el, config)
  observerTemp.value = observer
}

const WaterMask: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    waterMask(el, binding)
  },
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    nextTick(() => {
      disablePatchWaterMask(el)
    })
  },
  beforeUnmount() {
    if (observerTemp.value) {
      observerTemp.value.disconnect()
      observerTemp.value = null
    }
  }
}

export default WaterMask
