import { ElMessage } from 'element-plus'

// 把驼峰转换成横杠链接
export const toLine = (value?: string) => {
  if (value) {
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
  }
}

export function toast(message: string, type: any = 'success') {
  ElMessage({
    showClose: true,
    message,
    center: true,
    type
  })
}

export function dataURLToFile(baseFile: any, fileName: any) {
  const arr = baseFile.split(',')
  const imgType = arr[0].match(/:(.*?);/)[1] // 获取图片格式
  // const Buffer = require('buffer')
  // const decImg1 = Buffer.from(arr[1], 'base64') // 解码base-64 编码格式，或者使用atob(arr[1])
  // console.log(decImg1)
  const decImg = atob(arr[1])
  let len = decImg.length
  const u8arr = new Uint8Array(len)
  while (len--) {
    u8arr[len] = decImg.charCodeAt(len) // 转成ASCII码
  }
  return new File([u8arr], fileName, { type: imgType })
}
