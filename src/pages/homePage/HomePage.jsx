import React from "react"
import Banner from "../../components/banner/Banner"
import Services from "../../components/services/Services"
import About from "../../components/about/About"

function HomePage() {
  return (
    <React.Fragment>
      <Banner /> 
      <Services />
      <About />
    </React.Fragment>
  )
}

export default HomePage
