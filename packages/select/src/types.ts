export class SelectOptions {
  constructor(init?: SelectOptions) {
    if (init) {
      Object.assign(this, init)
    }
  }
  value?: string
  label?: string
  disabled?: boolean
  key?: string
}
