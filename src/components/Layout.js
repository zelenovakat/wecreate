import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import "./layout.css"

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
