import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export const IndexPageTemplate = ({
  logo,
  image,
  title,
  heading1,
  description1,
  heading2,
  description2,
  heading3,
  description3,
  contact1,
  contact2,
}) => (
  <div>
    <DivImg>
      <div>{image}</div>
      <CenterP>{title}</CenterP>
    </DivImg>
    <TextDiv>
      <h1>{heading1}</h1>
      <p>{description1}</p>
      <p>{description1}</p>
      <p>{description1}</p>
      <h2>{heading2}</h2>
      <p>{description2}</p>
      <p>{description2}</p>
      <p>{description2}</p>
      <h2>{heading3}</h2>
      <p>{description3}</p>
      <ContactCristen>{contact1}</ContactCristen>
      <div>{contact2}</div>
    </TextDiv>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading1: PropTypes.string,
  description1: PropTypes.string,
  heading2: PropTypes.string,
  description2: PropTypes.string,
  heading3: PropTypes.string,
  description3: PropTypes.string,
  contact1: PropTypes.string,
  contact2: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        logo={frontmatter.image}
        image={frontmastter.image}
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        description1={frontmatter.description1}
        heading2={frontmatter.heading2}
        description2={frontmatter.description2}
        heading3={frontmatter.heading3}
        description3={frontmatter.description3}
        contact1={frontmatter.contact}
        contact2={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading1
        description1
        heading2
        description2
        heading3
        description3
        contact
      }
    }
  }
`
