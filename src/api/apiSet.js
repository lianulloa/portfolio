import request from "../utils/request"

class ApiSet {
  constructor(url) {
    this.url = url
  }
  list(query, metadata = true) {
    return request.get(this.url, {
      params: {
        metadata,
        ...query
      }
    })
  }
  detail(id, query) {
    return request.get(`${this.url}/${id}`, {
      params: query
    })
  }
  create(body) {
    return request.post(this.url, body)
  }
  edit(id, body) {
    return request.put(`${this.url}/${id}`, body)
  }
  editStatus(ids = [], body) {
    return request.put(`${this.url}/status`, body, {
      params: {
        id: ids.join(",")
      }
    })
  }
  delete(id) {
    return request.delete(`${this.url}/${id}`)
  }
}

export default ApiSet
