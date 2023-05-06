export enum UploadStatus {
  /**
   * 等待状态
   */
  wait = 0,
  /**
   * 暂停状态
   */
  pause = 1,
  /**
   * 上传状态
   */
  uploading = 2,
  /**
   * 错误状态
   */
  error = 3,
  /**
   * 完成状态
   */
  done = 4
}
