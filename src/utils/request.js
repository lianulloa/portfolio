import axios from "axios"
import { getToken } from "./session"

const service = axios.create({
  baseURL: process.env.NODE_ENV === "pdevelopment"
    ? "http://localhost:8080/api/"
    : "https://portfolio-backend-production-9167.up.railway.app/api/",
  timeout: 30000,
  __handleErrorsInResponse: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  data: {}
})

service.interceptors.request.use(
  request => {
    const token = getToken()
    if (token) {
      request.headers["x-token"] = token
    }
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  async error => {
    const status = (error && error.response && error.response.status) || undefined
    const errorData = (error && error.response && error.response.data) || undefined
    const message =
      (error && error.response && error.response.data && error.response.data.message) ||
      "Ocurrio un problema al procesar su petición"

    return Promise.reject({
      message,
      status,
      data: errorData
    })
  }
)

export default service