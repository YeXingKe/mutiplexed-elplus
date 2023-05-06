<template>
  <input type="file" :multiple="true" class="upload-input" ref="uploadFileRef" />
  <el-button type="primary" size="default" id="file" @click="uploadFile">请选择文件</el-button>
  <el-button type="primary" size="default" @click="startUpload()">开始上传</el-button>
</template>
<script setup lang="ts">
import plupload from 'plupload'
import { ref } from 'vue'

let uploader = new plupload.Uploader({
  browse_button: 'file', //触发文件选择对话框的按钮，为那个元素id
  url: '/api/File/Attachment/Upload', //服务器端的上传页面地址
  multipart: true, // 为true时将以multipart/form-data
  max_retries: 1, // 当发生plupload.HTTP_ERROR错误时的重试次数，为0时表示不重试
  multi_selection: false // 是否可以在文件浏览对话框中选择多个文件
})

//绑定各种事件，并在事件监听函数中做你想做的事
uploader.bind('FilesAdded', function (uploader, files) {
  //每个事件监听函数都会传入一些很有用的参数，
  //我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
  console.log(uploader)
  console.log(files)
})
uploader.bind('UploadProgress', function (uploader, file) {
  //每个事件监听函数都会传入一些很有用的参数，
  //我们可以利用这些参数提供的信息来做比如更新UI，提示上传进度等操作
})
//......
//......
//在实例对象上调用init()方法进行初始化
uploader.init()
//最后给"开始上传"按钮注册事件
// document.getElementById('start_upload').onclick = function(){
//     uploader.start(); //调用实例对象的start()方法开始上传文件，当然你也可以在其他地方调用该方法
// }
let uploadFileRef = ref()
function uploadFile() {
  // 隐藏input本身标签的触发，通过额外点击触发
  uploadFileRef.value.dispatchEvent(new MouseEvent('click'))
}
function startUpload() {
  uploader.start()
}
</script>
<style lang="scss" scoped>
.upload-input {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
