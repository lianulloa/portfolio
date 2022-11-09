import React from "react"
import HomePage from "../../pages/homePage/HomePage"
import AlgorithmsPage from "../../pages/algorithmsPage/AlgorithmsPage"
import TimeLinePage from "../../pages/timelinePage/TimelinePage"

export const routes = {
  "/": () => <HomePage />,
  "/algorithms": () => <AlgorithmsPage />,
  "/timeline": () => <TimeLinePage />
}

export const basePath = "/portfolio"


