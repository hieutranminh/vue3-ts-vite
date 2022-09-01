export interface IResponseType<P = Record<string, any>> {
  code?: number
  status: number
  data: P
}
