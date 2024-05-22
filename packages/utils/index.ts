// 把驼峰转换成横杠链接
export const toLine = (value?: string) => {
  if (value) {
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
  }
}

export * from './common'
export * from './util'
export * from './iconfont'
