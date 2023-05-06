import HashWorker from './worker/hash.worker'
import SampleWorker from './worker/sample.worker'
import SparkMD5 from 'spark-md5'

// 获取文件的哈希值
export const getFileHash = (file, chunkSize) => {
  const blobSlice = File.prototype.slice
  return new Promise(resolve => {
    // 分片数
    const chunks = Math.ceil(file.size / chunkSize)
    let currentChunk = 0
    const spark = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()

    function loadNext() {
      const start = currentChunk * chunkSize
      const end = start + chunkSize >= file.size ? file.size : start + chunkSize
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
      fileReader.onload = ev => {
        if (ev.target) {
          spark.append(ev.target.result)
        }
        currentChunk += 1
        if (currentChunk < chunks) {
          loadNext()
        } else {
          const result = spark.end()
          const sparkMd5 = new SparkMD5()
          sparkMd5.append(result)
          sparkMd5.append(file.name)
          const hexHash = sparkMd5.end()
          resolve(hexHash)
        }
      }
    }
    fileReader.onerror = () => {
      console.warn('文件读取失败！')
    }
    loadNext()
  }).catch(err => {
    console.log(err)
  })
}

export const getFileHashWorker = (file, chunkSize) => {
  return new Promise(resolve => {
    const worker = new HashWorker()
    worker.postMessage({ file, chunkSize })
    worker.onmessage = event => {
      resolve(event.data)
    }
  })
}

export const getFileHashSample = (file, chunkSize) => {
  return new Promise(resolve => {
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
        // 中间的 前中后去两个子杰
        const mid = cur + offset / 2
        const end = cur + offset
        chunks.push(file.slice(cur, cur + 2))
        chunks.push(file.slice(mid, mid + 2))
        chunks.push(file.slice(end - 2, end))
      }
      // 前取两个子杰
      cur += offset
    }
    // 拼接
    reader.readAsArrayBuffer(new Blob(chunks))

    // 最后100K
    reader.onload = e => {
      if (e.target) {
        spark.append(e.target.result)
      }
      resolve(spark.end())
    }
  })
}

export const getFileHashWorkerSample = (file, chunkSize) => {
  return new Promise(resolve => {
    const worker = new SampleWorker()
    worker.postMessage({ file, chunkSize })
    worker.onmessage = event => {
      resolve(event.data)
    }
  })
}
