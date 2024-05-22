import { App } from 'vue'
import VerifyCode from './src/index.vue'
import AlphanumericCode from './src/components/AlphanumericCode.vue'
import ArithmeticCode from './src/components/ArithmeticCode.vue'
import FixPictureCode from './src/components/FixPictureCode.vue'
import RotateImgCode from './src/components/RotateImgCode.vue'
import SliderCode from './src/components/SliderCode.vue'

export type ComponentsType =
  | 'AlphanumericCode'
  | 'ArithmeticCode'
  | 'RotateImgCode'
  | 'SliderCode'
  | 'FixPictureCode'
export * from './src/components/AlphanumericCode.vue'
export * from './src/components/ArithmeticCode.vue'
export * from './src/components/FixPictureCode.vue'
export * from './src/components/RotateImgCode.vue'
export * from './src/components/SliderCode.vue'
export default {
  install(app: App) {
    // app.component('lib-verify-code', VerifyCode)
    app.component('lib-alphanumeric-code', AlphanumericCode)
    app.component('lib-arithmetic-code', ArithmeticCode)
    app.component('lib-fix-picture-code', FixPictureCode)
    app.component('lib-rotate-img-code', RotateImgCode)
    app.component('lib-slider-code', SliderCode)
  }
}
