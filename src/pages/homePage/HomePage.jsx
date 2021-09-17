import React from "react"
import Banner from "../../components/landing/banner/Banner"
import Services from "../../components/landing/services/Services"
import About from "../../components/landing/about/About"

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
