export class StampOptions {
  constructor(init?: StampOptions) {
    if (init) {
      Object.assign(this, init)
    }
  }

  innerText?: string = 'xxx专用章'
  outerText?: string = 'xxx科技股份有限公司'
  width?: number = 200
  height?: number = 200
  strokeColor?: string = '#f00'
  lineWidth?: number = 2
  opacity?: string = '.75' // 文字透明度
  position?: 'fixed' | 'absolute' = 'fixed' // 容器定位方式（值为absolute时，需要指定一个父元素非static定位）
}
