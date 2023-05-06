import { ElMessage } from 'element-plus'
import { Directive, DirectiveBinding } from 'vue'

/**
 * v-copy
 * 复制某个值至剪贴板上
 */
interface ElType extends HTMLElement {
  copyData: string | number
  __handleClick__: any
}

function clickCopy(this: any) {
  const input = document.createElement('input') // 创建输入框
  if (this.copyData) {
    input.value = this.copyData.toLocaleString() // 给输入框value赋值
  }
  document.body.appendChild(input) // 追加到body里面去
  input.select() // 选择输入框的操作
  document.execCommand('Copy') // 执行复制操作
  document.body.removeChild(input) // 删除加入的输入框
  if (this.copyData) {
    ElMessage.success('复制成功！')
  }
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
    el.addEventListener('click', clickCopy)
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default copy
