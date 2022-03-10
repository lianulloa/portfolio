import { useEffect } from "react"
import { useRoutes } from "hookrouter"
import { routes } from "./routes"

function RouterView() {
  const routeResult = useRoutes(routes)
  useEffect(() => window.scrollTo(0, 0))
  return routeResult
}

export default RouterView