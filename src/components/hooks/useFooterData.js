import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useFooterData = () => {
  const data = useStaticQuery(graphql`
    {
      allWp {
        nodes {
          crbThemeOptions {
            citPhone
            citEmail
            citFtAddress
            citFtButton1Title
            citFtButton1Url
            citFtButton2Title
            citFtButton2Url
            citFtContactEmail
            citFtContactPhone
            citFtDesc
            citFtHeading
            citCopyrightText
            citSmediaFb
            citSmediaIn
            citSmediaTweet
          }
        }
      }
    }
  `)
  return data.allWp.nodes[0]
}

