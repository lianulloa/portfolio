import { useEffect, useState } from "react"
import {usePath, navigate, A} from "hookrouter"
import "./NavBar.scss"


function NavBar() {
  const path = usePath()
  const [withAnchor, setWithAnchor] = useState("")
  useEffect(() => {
    if (withAnchor && withAnchor !== "#") {
      const element = document.querySelector(withAnchor).scrollIntoView()
      element && element.scrollIntoView()
    }
  }, [path])

  const sections = [
    { text: "Skills", anchor: "App-services" },
    { text: "About me", anchor: "App-about" },
    { text: "Algorithms", link: "algorithms"}
    // { text: "Contact", anchor: "App-contact" },
    // { text: "Contact Info", anchor: "App-footer" }
  ]


  const handleDistinctUrlProgammaticaly = (e, to) => {
    if (path !== "/") {
      e.preventDefault()
      navigate(to)
      setWithAnchor(to.split("/").pop())
    } else {
      setWithAnchor("")
    }
  }

  return (
    <div className="App-navigation fixed" >
      <div className="App-navigation-container">
        <a
          href="/#"
          className="App-anchor-logo"
          style={{ textDecoration: "none" }}
          onClick={(e) => handleDistinctUrlProgammaticaly(e,"/#")}
        >
          <span role="img" aria-label="go to the top" style={{ fontSize: 23 }}>
            🖐
          </span>
        </a>
        <ul className="App-navigation-btns" >
          {sections.map(section => (
            <li key={section.anchor || section.link}>
              {
                section.anchor &&
                <a
                  href={"/#" + section.anchor}
                  className="App-nav-anchor"
                  onClick={(e) => handleDistinctUrlProgammaticaly(e,"/#" + section.anchor)}
                >
                  {section.text}
                </a>
              }
              {
                section.link &&
                <A
                  href={section.link}
                  className="App-nav-anchor"
                >
                  {section.text}
                </A>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar