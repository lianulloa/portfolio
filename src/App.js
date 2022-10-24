import React, {useEffect, useRef} from "react"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import RouterView from "./components/routerView/RouterView"
import { renderBackground, cleanUp } from "./utils/threejs/pageBackground"
import "./App.scss"
function App() {
  const canvas = useRef(null)
  useEffect(() => {
    renderBackground(canvas.current)

    return cleanUp
  }, [])

  return (
    <div className="App">
      <canvas ref={canvas} width={innerWidth} height={innerHeight} className="page-background kk" />
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
