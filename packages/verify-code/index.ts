import { App } from 'vue'
import LibVerifyCode from './src/index.vue'
import LibAlphanumericCode from './src/components/AlphanumericCode.vue'
import LibArithmeticCode from './src/components/ArithmeticCode.vue'
import LibFixPictureCode from './src/components/FixPictureCode.vue'
import LibRotateImgCode from './src/components/RotateImgCode.vue'
import LibSliderCode from './src/components/SliderCode.vue'

export type ComponentsType =
  | 'AlphanumericCode'
  | 'ArithmeticCode'
  | 'RotateImgCode'
  | 'SliderCode'
  | 'FixPictureCode'

export {
  LibVerifyCode,
  LibAlphanumericCode,
  LibArithmeticCode,
  LibFixPictureCode,
  LibRotateImgCode,
  LibSliderCode
}
export default {
  install(app: App) {
    app.component('lib-verify-code', LibVerifyCode)
    app.component('lib-alphanumeric-code', LibAlphanumericCode)
    app.component('lib-arithmetic-code', LibArithmeticCode)
    app.component('lib-fix-picture-code', LibFixPictureCode)
    app.component('lib-rotate-img-code', LibRotateImgCode)
    app.component('lib-slider-code', LibSliderCode)
  }
}
