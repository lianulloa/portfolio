import React, { useEffect, useRef } from "react"
import { usePath } from "hookrouter"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import RouterView from "./components/routerView/RouterView"
import { renderBackground, cleanUp, rotateBackgroundTo } from "./utils/threejs/pageBackground"
import device from "./utils/device"
import "./App.scss"
function App() {
  const canvas = useRef(null)
  const path = usePath()
  useEffect(() => {
    !device.is("phone") && renderBackground(canvas.current)

    return cleanUp
  }, [])

  useEffect(() => {
    rotateBackgroundTo(path !== "/" ? "right" : "left")
  }, [path])

  return (
    <div className="App">
      <canvas ref={canvas} width={innerWidth} height={innerHeight} className="page-background" />
      {true &&
        <React.Fragment>
          <NavBar />
          <RouterView />
          <Footer />
        </React.Fragment>
      }
    </div>
  )
}

export default App
