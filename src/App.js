import React from "react"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import RouterView from "./components/routerView/RouterView"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterView />
      <Footer />
    </div>
  )
}

export default App
