export class ButtonsOptions {
  /**
   *
   */
  constructor(init?: ButtonsOptions) {
    if (init) {
      Object.assign(this, init)
    }
  }

  title?: string
  icon: string = ''
  tooltipTitle?: string
  tooltipPosition?: string = 'bottom'
  callBack!: (entity: any) => void

  visible?: (entity: any, observer: any) => void = (_entity, observer) => observer.next(true)
}
