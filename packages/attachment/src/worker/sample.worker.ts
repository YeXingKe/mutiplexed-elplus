import SparkMD5 from 'spark-md5'

export default class SampleHashWorker {
  constructor(init?: SampleHashWorker) {
    if (init) {
      Object.assign(this, init)
      this.onmessage = event => {
        this.fileData = event.data
      }
      const { file, chunkSize } = this.fileData
      const spark = new SparkMD5.ArrayBuffer()
      const reader = new FileReader()
      // 文件大小
      const size = file.size
      let offset = chunkSize

      let chunks = [file.slice(0, offset)]
      // 前面100K
      let cur = offset
      while (cur < size) {
        // 最后一块全部加进来
        if (cur + offset >= size) {
          chunks.push(file.slice(cur, cur + offset))
        } else {
          // 中间的 前中后去两个字节
          const mid = cur + offset / 2
          const end = cur + offset
          chunks.push(file.slice(cur, cur + 2))
          chunks.push(file.slice(mid, mid + 2))
          chunks.push(file.slice(end - 2, end))
        }
        // 前取两个字节
        cur += offset
      }
      // 拼接
      reader.readAsArrayBuffer(new Blob(chunks))
      reader.addEventListener('loadend', () => {
        spark.append(reader.result)
        this.postMessage(spark.end())
      })

      reader.addEventListener('error', function _error(err) {
        postMessage(err)
      })
    }
  }
  fileData: any
  onmessage: ((this: Window, ev: MessageEvent) => any) | null
  postMessage: (message: any, options?: WindowPostMessageOptions) => void
}
