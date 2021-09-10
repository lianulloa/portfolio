import Cookies from "js-cookie"

export const tokenKeys = {
  development: "lum-test-images-of-the-world",
  production: "lum-images-of-the-world"
}

export function getToken() {
  const environment = process.env.NODE_ENV
  const cookieToGet = (tokenKeys && tokenKeys[environment]) || "lum-images-of-the-world"

  const cookieTokenValue = Cookies.get(cookieToGet)
  if (environment === "development") {
    const localStorageToken = localStorage.getItem(cookieToGet)

    return localStorageToken || cookieTokenValue
  }

  return cookieTokenValue
}