export class RequestDataType {
  currentPage: number = 1
  pageSize: number = 10
  filters: string = ''
}

export class RequestParams {
  requestData?: RequestDataType
  extraPara?: {}
}
