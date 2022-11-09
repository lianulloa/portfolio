import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import ace from "ace-builds/src-noconflict/ace"
import "./index.css"
import "flexboxgrid/dist/flexboxgrid.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { setBasepath } from "hookrouter"
import { basePath } from "./components/routerView/routes"
setBasepath(basePath)
ace.config.set("basePath", basePath)

const root = createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
