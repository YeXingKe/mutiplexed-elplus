<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
    ref="form"
  >
    <template v-for="(item, index) in options" :key="index">
      <!-- 行布局表单 -->
      <template v-if="item.type === 'row'">
        <el-row :gutter="item.rowGutter">
          <el-col v-for="(jtem, jndex) in item.cols" v-bind="jtem.colOption" :key="jndex">
            <el-form-item :label="jtem.label" :prop="jtem.prop">
              <component :is="`el-${jtem.type}`" v-bind="jtem.attrs" v-model="model[jtem?.prop!]">
                <template v-if="jtem.children && jtem.children.length">
                  <component
                    v-for="(child, i) in jtem.children"
                    :key="i"
                    :label="child.label"
                    :value="child.value"
                    :is="`el-${child.type}`"
                  >
                  </component>
                </template>
              </component>
            </el-form-item>
          </el-col>
        </el-row>
      </template>

      <template v-else>
        <!-- 有子标签 -->
        <el-form-item
          v-if="item.children && item.children.length"
          :label="item.label"
          :prop="item.prop"
        >
          <component :is="`el-${item.type}`" v-bind="item.attrs" v-model="model[item?.prop!]">
            <component
              v-for="(child, i) in item.children"
              :key="i"
              :label="child.label"
              :value="child.value"
              :is="`el-${child.type}`"
            >
            </component>
          </component>
        </el-form-item>
        <!-- 没有子标签 -->
        <el-form-item v-else :label="item.label" :prop="item.prop">
          <!-- 上传表单 -->
          <el-upload
            v-if="item.type === 'upload'"
            v-bind="item.uploadAttrs"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :on-error="onError"
            :on-progress="onProgress"
            :on-change="onChange"
            :before-upload="beforeUpload"
            :before-remove="beforeRemove"
            :http-request="httpRequest"
          >
            <slot name="uploadArea"></slot>
            <slot name="uploadTip"></slot>
          </el-upload>
          <!-- 富文本表单 -->
          <div id="editor" v-else-if="item.type === 'editor'"></div>
          <component
            v-else
            :is="`el-${item.type}`"
            v-bind="item.attrs"
            v-model="model[item?.prop!]"
          >
          </component>
        </el-form-item>
      </template>
    </template>
    <!-- 提交按钮 -->
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { PropType, ref, onMounted, watch, nextTick } from 'vue'
import { FormInstance, FormOptions } from '../types/types'
import cloneDeep from 'lodash/cloneDeep'
import E from 'wangeditor'

let emits = defineEmits([
  'on-preview',
  'on-remove',
  'on-success',
  'on-error',
  'on-progress',
  'on-change',
  'before-upload',
  'before-remove',
  'on-exceed'
])

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function
  }
})

let model = ref<any>(null)
let rules = ref<any>(null)
let form = ref<FormInstance | null>()
let edit = ref()

// 初始化表单
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === 'editor') {
        // 初始化富文本
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder!
            editor.create()
            // 初始化富文本的内容
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml
            }
            edit.value = editor
          }
        })
      }
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
let resetFields = () => {
  // 重置element-plus的表单
  form.value!.resetFields()
  // 重置富文本编辑器的内容
  // 获取到富文本的配置项
  if (props.options && props.options.length) {
    let editorItem = props.options.find(item => item.type === 'editor')!
    if (edit.value) {
      edit.value.txt.html(editorItem.value)
    }
  }
}
// 表单验证方法
let validate = () => {
  return form.value!.validate
}
// 获取表单数据
let getFormData = () => {
  return model.value
}

// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData
})

onMounted(() => {
  initForm()
})
// 监听父组件传递进来的options
watch(
  () => props.options,
  () => {
    initForm()
  },
  { deep: true }
)

// 上传组件的所有方法
let onPreview = (file: File) => {
  emits('on-preview', file)
}
let onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find(item => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, file, fileList }
  emits('on-success', { response, file, fileList })
}
let onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList })
}
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList })
}
let onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
let beforeUpload = (file: File) => {
  emits('before-upload', file)
}
let beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList })
}
let onExceed = (files: File, fileList: FileList) => {
  emits('on-exceed', { files, fileList })
}
</script>

<style lang="scss" scoped></style>
