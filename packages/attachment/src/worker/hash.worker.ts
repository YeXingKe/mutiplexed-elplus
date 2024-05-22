import SparkMD5 from 'spark-md5'

export default class HashWorker {
  constructor(init?: HashWorker) {
    if (init) {
      Object.assign(this, init)
      this.onmessage = event => {
        this.fileData = event.data
      }
      const { file, chunkSize } = this.fileData
      const spark = new SparkMD5.ArrayBuffer()
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)

      reader.addEventListener('loadend', () => {
        const content = reader.result
        spark.append(content)

        const hash = spark.end()
        if (this.postMessage) {
          this.postMessage(hash)
        }
      })
      reader.addEventListener('error', function _error(err) {
        postMessage(err)
      })
    }
  }
  fileData: any
  onmessage?: (this: Window, ev: MessageEvent) => any
  postMessage?: (message: any, options?: WindowPostMessageOptions) => void
}
