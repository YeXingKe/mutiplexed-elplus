export class FiltersOption {
  constructor(init?: FiltersOption) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 用来限定上传文件的类型，为一个数组
   */
  mime_types?: string
  /**
   * 用来限定上传文件的大小，如果文件体积超过了该值，则不能被选取
   */
  max_file_size?: string
  /**
   * 是否允许选取重复的文件，为true时表示不允许，默认为false
   */
  prevent_duplicates?: string
}

export class ImageResize {
  constructor(init?: ImageResize) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 指定压缩后图片的宽度，如果没有设置该属性则默认为原始图片的宽度
   */
  width?: number
  /**
   * 指定压缩后图片的高度，如果没有设置该属性则默认为原始图片的高度
   */
  height?: number
  /**
   * 压缩后图片的质量，只对jpg格式的图片有效
   */
  crop?: boolean = false
  /**
   * 压缩后图片的质量，只对jpg格式的图片有效，默认为90
   */
  quality?: number = 90
  preserve_headers?: boolean = true
}

export class UsefulOptions {
  constructor(init?: UsefulOptions) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 是否可以在文件浏览对话框中选择多个文件
   */
  multi_selection?: boolean = true
  /**
   * 使用该参数来设置你必须需要的一些功能特征
   */
  required_features?: any
  /**
   * 是否为每个上传的文件生成一个唯一的文件名
   */
  unique_names?: string
}

export class PluploadOption {
  constructor(init?: PluploadOption) {
    if (init) {
      Object.assign(this, init)
    }
  }
  /**
   * 服务器端接收和处理上传文件的脚本地址
   */
  url: string | undefined
  /**
   * 触发文件选择框的DOM元素的ID，点击后显示文件选择框
   */
  browse_button: string | undefined
  /**
   * 用来指定上传方式，指定多个上传方式请使用逗号隔开。
   * 一般情况下，不需要配置该参数。
   */
  runtimes?: string = 'html5,flash,silverlight,html4'
  /**
   * 为前面指定的browse_button的父元素
   * 该参数的值可以是一个元素的id,也可以是DOM元素本身
   */
  container?: string
  /**
   * 指定文件上传时文件域的名称，默认为file
   */
  file_data_name?: string = 'files'
  /**
   * flash上传组件的url地址，如果是相对路径，则相对的是调用Plupload的html文档
   */
  flash_swf_url?: string = 'js/Moxie.swf'
  /**
   * silverlight上传组件的url地址，如果是相对路径，则相对的是调用Plupload的html文档
   */
  silverlight_xap_url?: string = 'js/Moxie.xap'
  /**
   * 限制上传文件的类型，大小等，该参数以对象的形式传入，
   * 它包括三个属性：mime_types，max_file_size，prevent_duplicates
   */
  filters?: FiltersOption = new FiltersOption()
  /**
   * 请求头配置
   */
  headers?: object
  /**
   * 是否以以multipart/form-data的形式来上传文件
   */
  multipart?: boolean = true
  /**
   * 上传时的附加参数
   */
  multipart_params?: object
  /**
   * 当发生plupload.HTTP_ERROR错误时的重试次数，为0时表示不重试
   */
  max_retries?: number = 0
  /**
   * 文件分片大小
   * 可以为数字或者是字节单位字符串
   */
  chunk_size?: number | string = 0
  resize?: ImageResize = new ImageResize()
  /**
   * 指定使用拖拽方式来选择上传文件时的拖拽区域
   * 该参数的值可以是一个元素的id,也可以是DOM元素本身
   */
  drop_element?: Element | string | Array<any>

  // 实例method

  /**
   * 初始化实例
   */
  init?: () => void
  setOption?: (option: string | object, value: Array<any>) => void
  getOption?: (option: string) => void
  /**
   * 刷新上传实例
   */
  refresh?: () => void
  /**
   * 开始上传队列
   */
  start?: () => void
  /**
   * 停止上传队列
   */
  stop?: () => void
  /**
   * 获取文件id
   */
  getFile?: (fileId: string) => void
  addFile?: (file: any, fileName: Array<any>) => void
  removeFile?: (file: any) => void
  splice?: (start, length) => void
  trigger?: (name: string, Multiple: object) => void
  hasEventListener?: (name: string) => void
  bind?: (name: string, fn: Function, scope: Object, priority: number) => void
  unbind?: (name: string, fn: Function) => void
  destroy?: () => void

  // 实例事件
  Init?: (uploader) => void
  PostInit?: (uploader) => void
  /**
   * 当使用Plupload实例的setOption()方法改变当前配置参数后触发监听函数参数
   * uploader为当前的plupload实例对象，
   * option_name为发生改变的参数名称，
   * new_value为改变后的值，
   * old_value为改变前的值
   */
  OptionChanged?: (uploader, option_name, new_value, old_value) => void
  /**
   * 当调用plupload实例的refresh()方法后会触发该事件
   */
  Refresh?: (uploader) => void
  /**
   * 当上传队列的状态发生改变时触发监听函数参数
   */
  StateChanged?: (uploader) => void
  /**
   * 当上传队列中某一个文件开始上传后触发监听函数参数
   */
  UploadFile?: (uploader, file) => void
  /**
   * 当队列中的某一个文件正要开始上传前触发监听函数参数
   */
  BeforeUpload?: (uploader, file) => void
  /**
   * 当上传队列发生变化后触发，即上传队列新增了文件或移除了文件
   */
  QueueChanged?: (uploader) => void
  /**
   * 会在文件上传过程中不断触发，可以用此事件来显示上传进度监听函数参数
   */
  UploadProgress?: (uploader, file) => void
  /**
   * 当文件从上传队列移除后触发监听函数参数
   */
  FilesRemoved?: (uploader, files) => void
  /**
   * 事件会在每一个文件被添加到上传队列前触发监听函数参数
   */
  FileFiltered?: (uploader, file) => void
  /**
   * 当文件添加到上传队列后触发监听函数参数
   */
  FilesAdded?: (uploader, files) => void
  /**
   * 当队列中的某一个文件上传完成后触发监听函数参数
   * responseObject包含：
   * response：服务器返回的文本responseHeaders：服务器返回的头信息status：服务器返回的http状态码，比如200
   */
  FileUploaded?: (uploader, file, responseObject) => void
  /**
   * 当使用文件小片上传功能时，每一个小片上传完成后触发监听函数参数
   * responseObject包含：
   * offset：该文件小片在整体文件中的偏移量
   * response：服务器返回的文本
   * responseHeaders：服务器返回的头信息
   * status：服务器返回的http状态码，比如200
   * total：该文件(指的是被切割成了许多文件小片的那个文件)的总大小，单位为字节
   */
  ChunkUploaded?: (uploader, file, responseObject) => void
  /**
   * 当上传队列中所有文件都上传完成后触发监听函数参数
   */
  UploadComplete?: (uploader, files) => void
  /**
   * 当发生错误时触发监听函数参数
   * errObject包含：
   * code：错误代码，具体请参考plupload上定义的表示错误代码的常量属性
   * file：与该错误相关的文件对象
   * message：错误信息
   */
  Error?: (uploader, errObject) => void
  /**
   * 当调用destroy方法时触发监听函数参数
   */
  Destroy?: (uploader) => void
}
