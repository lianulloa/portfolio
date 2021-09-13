import React from "react"
import HomePage from "../../pages/homePage/HomePage"
import AlgorithmsPage from "../../pages/algorithmsPage/AlgorithmsPage"

export const routes = {
  "/": () => <HomePage />,
  "/algorithms": () => <AlgorithmsPage />
}

export const basePath = "/portfolio"


