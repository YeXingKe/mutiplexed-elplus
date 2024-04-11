import { ElMessage } from 'element-plus'

// 把驼峰转换成横杠链接
export const toLine = (value?: string) => {
  if (value) {
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
  }
}

export function toast(message: string, type = 'success') {
  ElMessage({
    showClose: true,
    message,
    center: true,
    type
  })
}
