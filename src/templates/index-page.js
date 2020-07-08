import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { mediaSmall } from "../components/Screen"
import wecreateMp4 from "../../static/img/wecreate.mp4"
import Captions from "../../gatsby-config"
export const IndexPageTemplate = ({
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
    <DivVideo>
      <MainVideo type="video/mp4" autoPlay muted loop>
        <source src={wecreateMp4} type="video/mp4" />
        <track kind="captions" srcLang="en" src={Captions} />
      </MainVideo>
      <CenterP>{title}</CenterP>
    </DivVideo>
    <TextDiv>
      <h1>{heading1}</h1>
      <p>{description1}</p>
      <h2>{heading2}</h2>
      <p>{description2}</p>
      <h2>{heading3}</h2>
      <p>{description3}</p>
      <h1>contact</h1>
      <ContactCristen>
        <h2>{contact1}</h2>
        <a href="mailto:christian@wecreate.se">christian@wecreate</a>
      </ContactCristen>
      <div>
        <h2>{contact2}</h2>
        <a href="mailto:dan@wecreate.se">dan@wecreate</a>
      </div>
    </TextDiv>
  </div>
)

IndexPageTemplate.propTypes = {
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
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        description1={frontmatter.description1}
        heading2={frontmatter.heading2}
        description2={frontmatter.description2}
        heading3={frontmatter.heading3}
        description3={frontmatter.description3}
        contact1={frontmatter.contact1}
        contact2={frontmatter.contact2}
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
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading1
        description1
        heading2
        description2
        heading3
        description3
        contact1
        contact2
      }
    }
  }
`

const MainVideo = styled.video`
  width: 100%;
`
const TextDiv = styled.div`
  margin: 10px 50px 50px 50px;
  h2 {
    font-family: Comic Sans MS;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
    font-family: arial;
    font-style: oblique;
  }
  h1 {
    font-family: Comic Sans MS;
    margin-top: 70px;
    margin-bottom: 20px;
  }
  a {
    font-size: 20px;
    color: #201f1f;
    text-decoration: none;
    font-family: arial;
    font-style: oblique;
  }
`
const DivVideo = styled.div`
  display: flex;
  justify-content: center;
`
const CenterP = styled.p`
  position: absolute;
  color: #ffffff;
  font-size: 70px;
  font-style: oblique;
  font-weight: 600;
  text-transform: lowercase;
  ${mediaSmall} {
    font-size: 200px;
  }
`
const ContactCristen = styled.div`
  margin-bottom: 20px;
`
