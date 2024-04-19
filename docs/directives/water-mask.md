# 水印指令

## 基本用法


## 如何封装

页面水印业务相信我们都有遇过，为什么需要给页面添加水印？为了保护自己的版权和知识产权，给图片加上水印一般是为了防止盗图者用于商业用途，损害原作者的权益。那么在我们开发当中有什么方法可以实现呢？一般分为前端实现和后端实现这两种方法，本文主要是学习前端实现方法：
- **方式一**：`直接将字体用块元素包裹，动态设置绝对定位，然后通过transform属性旋转`。但是需要考虑一个问题，当图片过大或图片过多时会很影响性能，所以就不详细说这一方式了。
- **方式二**：`canvas上绘制出字体`，设置好样式，最后以图片的样式导出，用图片作为水印层的背景图。

在学习水印层之前，我先抛出两个问题：
- 如果水印文字长，水印可以实现自适应吗？
- 能否限制用户修改并删除水印？

其实上面这两个问题是我们做页面水印需要考虑的两个核心问题，好的，话不多说，我们一起带着问题去探索🔍。

首先定义一个指令，我们要明确两点：`命名`（**v-water-mask**）和`绑定值`（配置值，option），实现如下：

```html
<div v-water-mask:options="wmOption"></div>

// 配置值
const wmOption = reactive<WMOptions>({
  textArr: ['路灯下的光', `${dayjs().format('YYYY-MM-DD HH:mm')}`],
  deg: -35,
});
```
效果如下图所示：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81ea0ac4ee5c4ee18c74ad0dda43cd31~tplv-k3u1fbpfcp-watermark.image?)
从上图中我们可以看出，`文字有文本以及时间字符串，水印文字都是倾斜了一定角度`，其实就是旋转了一定角度的。那么问题来了，我们可能问这些是怎么设置的？首先这需要使用指令的时候通过一些配置来实现一些固定值，下面这里都把这些配置都封装成一个类了，为什么要这样做？这样就不用使用的时候每次都要设定一个默认值，比如通过定义接口来引用这些配置时每次都需要设置一个默认值：

```js
export class WMOptions {
  constructor(init?: WMOptions) {
    if (init) {
      Object.assign(this, init);
    }
  }

  textArr: Array<string> = ['test', '自定义水印']; // 需要展示的文字，多行就多个元素【必填】
  font?: string = '16px "微软雅黑"'; // 字体样式
  fillStyle?: string = 'rgba(170,170,170,0.4)'; // 描边样式
  maxWidth?: number = 200; // 文字水平时最大宽度
  minWidth?: number = 120; // 文字水平时最小宽度
  lineHeight?: number = 24; // 文字行高
  deg?: number = -45; // 旋转的角度 0至-90之间
  marginRight?: number = 120; // 每个水印的右间隔
  marginBottom?: number = 40; // 每个水印的下间隔
  left?: number = 20; // 整体背景距左边的距离
  top?: number = 20; // 整体背景距上边的距离
  opacity?: string = '.75'; // 文字透明度
  position?: 'fixed' | 'absolute' = 'fixed'; // 容器定位方式（值为absolute时，需要指定一个父元素非static定位）
}
```
细心的地我们可能会发现显示地文本是一个数组，这样主要是为了方便分行，聪明地我们可能会问：`假如其中一个比较长怎么换行？`，别急别急，我们先了解一下指令是怎么定义的：
- **定义指令**：首先定义为一个ObjectDirective对象类型，因为指令也就是通过在不同生命周期中对当前元素做一些操作。
    ```js
    const WaterMask: ObjectDirective = {
      // el为当前元素
      // bind是当前绑定的属性，注意地，由于是vue3实现，这个值是一个ref类型
        beforeMount(el: HTMLElement, binding: DirectiveBinding) {
            // 实现水印的核心方法
            waterMask(el, binding);
        },
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            nextTick(() => {
              // 禁止修改水印
              disablePatchWaterMask(el);
            });
        },
        beforeUnmount() {
            // 清除监听DOM节点的监听器
            if (observerTemp.value) {
              observerTemp.value.disconnect();
              observerTemp.value = null;
            }
        },
    };
    export default WaterMask;
    ```
    - **waterMask方法**：实现水印业务细节呈现，对文字的自适应换行，根据页面元素大小来计算合适宽高值。
    - **disablePatchWaterMask方法**：通过MutationObserver方法监听DOM元素修改，从而阻止用户取消水印的呈现。
- **声明指令**：在main文件中定义声明指令，这样我们就可以全局使用这个指令了
   
    ```js
    app.directive('water-mask', WaterMask);
    ```
接下来我们来看一一分析水印的两个核心方法：`waterMask`和`disablePatchWaterMask`。
### 实现水印功能

通过waterMask方法实现，waterMask方法主要是做了四件事情：

```js
let defaultSettings = new WMOptions();
const waterMask = function (element: HTMLElement, binding: DirectiveBinding) {
  // 合并默认值和传参配置
  defaultSettings = Object.assign({}, defaultSettings, binding.value || {});
  defaultSettings.minWidth = Math.min(
    defaultSettings.maxWidth!,
    defaultSettings.minWidth!
  ); // 重置最小宽度
  const textArr = defaultSettings.textArr;
  if (!Util.isArray(textArr)) {
    throw Error('水印文本必须放在数组中！');
  }
  const c = createCanvas(); // 动态创建隐藏的canvas
  draw(c, defaultSettings); // 绘制文本
  convertCanvasToImage(c, element); // 转化图像
};
```
- **获取配置的默认值**：由于开发者传参的时候不一定需要把所有配置的传进来，其实按照本身默认的一些值就行，通过浅拷贝把指令绑定的值传进来的一起融合一起就可以更新默认的配置：
  
- **创建canvas标签**：因为是通过canvas实现的，我们本身是没有直接在template中呈现这个标签，所以需要通过document对象创建canvas标签：
  
    ```js
    function createCanvas() {
      const c = document.createElement('canvas');
      c.style.display = 'none';
      document.body.appendChild(c);
      return c;
    }
    ```
- **绘制文本**：首先遍历传入需要显示的水印信息，也就是textArr文本数组，遍历数组判断数组元素是不是超出了配置的每个水印默认宽高，然后根据文本元素`返回超出文本长度的文本分割数组`，同时把文本最大宽度返回，最后通过切割结果动态修改canvas的宽高。
   
    ```js
    function draw(c: any, settings: WMOptions) {
      const ctx = c.getContext('2d');
      // 切割超过最大宽度的文本并获取最大宽度
      const textArr = settings.textArr || []; // 水印文本数组
      let wordBreakTextArr: Array<any> = [];
      const maxWidthArr: Array<number> = [];
      // 遍历水印文本数组，判断每个元素的长度
      textArr.forEach((text) => {
        const result = breakLinesForCanvas(ctx,text + '',settings.maxWidth!,settings.font!);
        // 合并超出最大宽度的分割数组
        wordBreakTextArr = wordBreakTextArr.concat(result.textArr);
        // 最大宽度
        maxWidthArr.push(result.maxWidth);
      });
      
      // 最大宽度排序，最后取最大的最大宽度maxWidthArr[0]
      maxWidthArr.sort((a, b) => {
        return b - a;
      });

      // 根据需要切割结果，动态改变canvas的宽和高
      const maxWidth = Math.max(maxWidthArr[0], defaultSettings.minWidth!);
      const lineHeight = settings.lineHeight!;
      const height = wordBreakTextArr.length * lineHeight;
      const degToPI = (Math.PI * settings.deg!) / 180;
      const absDeg = Math.abs(degToPI);
      // 根据旋转后的矩形计算最小画布的宽高
      const hSinDeg = height * Math.sin(absDeg);
      const hCosDeg = height * Math.cos(absDeg);
      const wSinDeg = maxWidth * Math.sin(absDeg);
      const wCosDeg = maxWidth * Math.cos(absDeg);

      c.width = parseInt(hSinDeg + wCosDeg + settings.marginRight! + '', 10);
      c.height = parseInt(wSinDeg + hCosDeg + settings.marginBottom! + '', 10);

      // 宽高重置后，样式也需重置
      ctx.font = settings.font;
      ctx.fillStyle = settings.fillStyle;
      ctx.textBaseline = 'hanging'; // 默认是alphabetic,需改基准线为贴着线的方式

      // 移动并旋转画布
      ctx.translate(0, wSinDeg);
      ctx.rotate(degToPI);

      // 绘制文本
      wordBreakTextArr.forEach((text, index) => {
        ctx.fillText(text, 0, lineHeight * index);
      });
    }
    ```
    从上面代码中我们可以看出绘制文本的核心操作是`切割超长文本`和`动态修改canvas的宽高`。我们接下来看看这两个操作是如何实现的？
    - **切割超长文本**：
    > measureText()方法是`基于当前字型来计算字符串宽度`的。
    ```js
    // 根据最大宽度切割文字
    function breakLinesForCanvas(context: any,text: string,width: number,font: string) {
      const result = [];
      let maxWidth = 0;

      if (font) {
        context.font = font;
      }
      // 查找切割点
      let breakPoint = findBreakPoint(text, width, context);
      while (breakPoint !== -1) {
        // 切割点前的元素入栈
        result.push(text.substring(0, breakPoint));
        // 切割点后的元素
        text = text.substring(breakPoint);
        maxWidth = width;
        // 查找切割点后的元素是否还有切割点
        breakPoint = findBreakPoint(text, width, context);
      }
      // 如果切割的最后文本还有文本就push
      if (text) {
        result.push(text);
        const lastTextWidth = context.measureText(text).width;
        maxWidth = maxWidth !== 0 ? maxWidth : lastTextWidth;
      }

      return {
        textArr: result,
        maxWidth: maxWidth,
      };
    }
    ```
    - **寻找切割点**：通过二分查找方法查询字符串超长的位置在哪里：
    
    ```js
    // 寻找切换断点
    function findBreakPoint(text: string, width: number, context: any) {
      let min = 0;
      let max = text.length - 1;
      while (min <= max) {
        // 二分字符串中点
        const middle = Math.floor((min + max) / 2);
        // measureText()方法是基于当前字型来计算字符串宽度的
        const middleWidth = context.measureText(text.substring(0, middle)).width;
        const oneCharWiderThanMiddleWidth = context.measureText(
          text.substring(0, middle + 1)
        ).width;
        // 判断当前文本切割是否超了的临界点
        if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
          return middle;
        }
        // 如果没超继续遍历查找
        if (middleWidth < width) {
          min = middle + 1;
        } else {
          max = middle - 1;
        }
      }
      return -1;
    }
    ```
    - **动态修改canvas的宽高**：通过旋转的角度值、最大宽度值以及勾股定理一一计算宽度和高度，首先我们需要把旋转的角度转换为弧度值（公式：**π/180×角度**，也就是 **(Math.PI*settings.deg!) / 180** ），我们先看看下图：
    
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0367521447843c19a8984d5f521e0be~tplv-k3u1fbpfcp-watermark.image?)
    所以canvas图形宽为`hSinDeg + wCosDeg + settings.marginRight`。canvas图形高为：`wSinDeg + hCosDeg + settings.marginBottom`。
- **转化图像**：通过对当前canvas配置转化为图形url，然后配置元素的style属性。
 
    ```js
    // 将绘制好的canvas转成图片
    function convertCanvasToImage(canvas: any, el: HTMLElement) {
      // 判断是否为空渲染器
      if (Util.isUndefinedOrNull(el)) {
        console.error('请绑定渲染容器');
      } else {
        // 转化为图形数据的url
        const imgData = canvas.toDataURL('image/png');
        const divMask = el;
        divMask.style.cssText = `position: ${defaultSettings.position}; left:0; top:0; right:0; bottom:0; z-index:9999; pointer-events:none;opacity:${defaultSettings.opacity}`;
        divMask.style.backgroundImage = 'url(' + imgData + ')';
        divMask.style.backgroundPosition =
          defaultSettings.left + 'px ' + defaultSettings.top + 'px';
      }
    }
    ```
### 实现禁止用户修改水印
我们都知道，如果用户需要修改html一般都会浏览器调式中的Elements中修改我们网页的元素的样式就可以，也就是我们只要`监听到DOM元素被修改就可以，控制修改DOM无法生效`。由于修改DOM有两种方法：**修改元素节点**和**修改元素属性**，所以只要控制元素的相关DOM方法中进行相应操作就可以实现我们的禁止。而通过disablePatchWaterMask方法主要做了三件事情：
- **创建MutationObserver实例**：也就是实例化MutationObserver，这样才能调用MutationObserver中的observe函数实现DOM修改的监听。
  
- **创建MutationObserver回调函数**：通过传入的两个参数，一个当前元素集合和observer监听器。
- **监听需要监听的元素**：调用observer需要传入监听元素以及监听配置，这个可以参考一下MutationObserver用法配置。

```js
function disablePatchWaterMask(el: HTMLElement) {
  // 观察器的配置（需要观察什么变动）
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
  };
  /* MutationObserver 是一个可以监听DOM结构变化的接口。 */
  const MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;
  // 当观察到变动时执行的回调函数
  const callback = function (mutationsList: any, observer: any) {
    console.log(mutationsList);
    for (let mutation of mutationsList) {
      let type = mutation.type;
      switch (type) {
        case 'childList':
          if (mutation.removedNodes.length > 0) {
            // 删除节点，直接从删除的节点数组中添加回来
            mutation.target.append(mutation.removedNodes[0]);
          }
          break;
        case 'attributes':
          // 为什么是这样处理，我们看一下下面两幅图
          mutation.target.setAttribute('style', mutation.target.oldValue);
          break;
        default:
          break;
      }
    }
  };
  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);
  // 以上述配置开始观察目标节点

  observer.observe(el, config);
  observerTemp.value = observer;
}
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/160eec063ac64d02b97401fe15aaa1ab~tplv-k3u1fbpfcp-watermark.image?)
**从水印到取消水印（勾选到不勾选background-image）**：我们发现mutation.target属性中的oldValue值就是我们设置style。
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fbbc4313665f4fc997de95a8c6b397ca~tplv-k3u1fbpfcp-watermark.image?)
**从取消水印到恢复水印（不勾选到勾选background-image）**：我们发现mutation.target属性中的oldValue值的background-image被注释掉了。

从上面两个转化中，我们就可以直接得出直接赋值`当勾选到不勾选是监听到DOM修改的oldValue（真正的style）`，因为这时候获取到的才是真正style，反之就不是了，由于我们不勾选时的oldValue赋值给不勾选时的style，所以当我们不勾选时再转化为勾选时就是真正style，从而实现不管用户怎么操作都不能取消水印。
