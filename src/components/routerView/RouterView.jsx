// import React from "react"
import { useRoutes } from "hookrouter";
import { routes } from "./routes"

function RouterView() {
  const routeResult = useRoutes(routes);
  return routeResult
}

export default RouterView