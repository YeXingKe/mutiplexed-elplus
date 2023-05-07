import { DirectiveBinding, ObjectDirective, nextTick, ref } from 'vue'
import { Util } from '../../utils/util'
import { StampOptions } from '../../utils/stamp-option'

/**
 * v-stamp
 */

let defaultSettings = new StampOptions()

function createCanvas() {
  const c = document.createElement('canvas')
  c.style.display = 'none'
  document.body.appendChild(c)
  return c
}

// 将绘制好的canvas转成图片
function convertCanvasToImage(canvas: any, el: HTMLElement) {
  if (Util.isUndefinedOrNull(el)) {
    console.error('请绑定渲染容器')
  } else {
    const imgData = canvas.toDataURL('image/png')
    const divMask = el
    window.pageYOffset = 0
    document.documentElement.scrollTop = 0
    divMask.scroll(0, 0)
    divMask.style.padding = '0px'
    divMask.style.margin = '0px'
    // divMask.style.cssText = `position: ${defaultSettings.position}; left:0; top:0; right:0; bottom:0; z-index:9999; pointer-events:none;opacity:${defaultSettings.opacity}`
    divMask.style.cssText = `position: ${defaultSettings.position}; left:0; top:0px; right:0; bottom:0; z-index:9999`
    divMask.style.backgroundImage = 'url(' + imgData + ')'
    divMask.style.backgroundRepeat = 'no-repeat'
    // divMask.style.backgroundSize = '100% 100%'
    // divMask.style.backgroundPosition = defaultSettings.left + 'px ' + defaultSettings.top + 'px'
  }
}

const observerTemp = ref()

function disablePatchStamp(el: HTMLElement) {
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

const createStamp = function (element: HTMLElement, binding: DirectiveBinding) {
  defaultSettings = Object.assign({}, defaultSettings, binding.value || {})
  const c = createCanvas() // 动态创建隐藏的canvas
  draw(c, defaultSettings) // 绘制文本
  convertCanvasToImage(c, element) // 转化图像
}

function draw(canvas: any, settings: StampOptions) {
  let ctx = canvas.getContext('2d')
  let width = settings.width / 2
  let height = settings.height / 2

  ctx.lineWidth = settings.lineWidth
  ctx.strokeStyle = settings.strokeColor
  ctx.beginPath()
  ctx.arc(width, height, 90, 0, Math.PI * 2) // 宽、高、半径
  ctx.stroke()

  create5star(ctx, width, height, 25, settings.strokeColor, 0) // 绘画五角星

  // 绘制印章名称
  ctx.font = '20px 宋体'
  ctx.textBaseline = 'middle' //设置文本的垂直对齐方式
  ctx.textAlign = 'center' //设置文本的水平对对齐方式
  ctx.lineWidth = settings.lineWidth
  ctx.strokeStyle = settings.strokeColor
  ctx.strokeText(settings.innerText, width, height + 60)

  // 绘制印章单位
  ctx.translate(width, height) // 平移到此位置,
  ctx.font = '23px 宋体'
  let count = settings.outerText.length // 字数
  let angle = (4 * Math.PI) / (3 * (count - 1)) // 字间角度
  let chars = settings.outerText.split('')
  let c
  for (let i = 0; i < count; i++) {
    c = chars[i] // 需要绘制的字符
    if (i == 0) {
      ctx.rotate((5 * Math.PI) / 6)
    } else {
      ctx.rotate(angle)
    }

    // ctx.scale(100, 100)
    ctx.save()
    ctx.translate(70, 0) // 平移到此位置,此时字和x轴垂直，公司名称和最外圈的距离
    ctx.rotate(Math.PI / 2) // 旋转90度,让字平行于x轴
    ctx.strokeText(c, 0, 0) // 此点为字的中心点
    ctx.restore()
  }
}

function create5star(ctx: any, sx: any, sy: any, radius: any, color: any, rotate: any) {
  ctx.save()
  ctx.fillStyle = color
  ctx.translate(sx, sy) // 移动坐标原点
  ctx.rotate(Math.PI + rotate) // 旋转
  ctx.beginPath()

  let dig = (Math.PI / 5) * 4
  for (let i = 0; i < 5; i++) {
    // 画五角星的五条边
    let x = Math.sin(i * dig)
    let y = Math.cos(i * dig)
    ctx.lineTo(x * radius, y * radius)
  }
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
  ctx.restore()
}

const Stamp: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    createStamp(el, binding)
  },
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    nextTick(() => {
      disablePatchStamp(el)
    })
  },
  beforeUnmount() {
    if (observerTemp.value) {
      observerTemp.value.disconnect()
      observerTemp.value = null
    }
  }
}

export default Stamp
