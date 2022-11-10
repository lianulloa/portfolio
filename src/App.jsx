import React, { useEffect, useRef } from "react"
import { usePath } from "hookrouter"
import { useDispatch, useSelector } from "react-redux"
import { isMobile } from "react-device-detect"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import RouterView from "./components/routerView/RouterView"
import { renderBackground, cleanUp, rotateBackgroundTo } from "./utils/threejs/pageBackground"
import { selectors as settingsSelector, mutations as settingsMutations } from "./store/slices/settings"
import "./App.scss"

function App() {
  const canvas = useRef(null)
  const path = usePath()
  const backgroundRotation = useSelector(settingsSelector.backgroundRotation)
  const dispatch = useDispatch()

  const extraHeightForMobileScrollBehaviour = isMobile ? 0.20 * innerHeight : 0

  useEffect(() => {
    renderBackground(canvas.current)

    return cleanUp
  }, [])

  useEffect(() => {
    dispatch(
      settingsMutations.setBackgroundRotation(path !== "/" ? "right" : "left")
    )
  }, [path])

  useEffect(() => {
    rotateBackgroundTo(backgroundRotation)
  }, [backgroundRotation])

  return (
    <div className="App">
      <canvas ref={canvas} width={innerWidth} height={innerHeight + extraHeightForMobileScrollBehaviour} className="page-background" />
      <NavBar />
      <RouterView />
      <Footer />
    </div>
  )
}

export default App
