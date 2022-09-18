export interface ApiResponse<T> {
  errors: ApiError[]
  data: T
}

export interface ApiError {
  message: string
  status: number
}
