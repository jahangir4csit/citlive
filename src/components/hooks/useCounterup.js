import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useStatCountUp = () => {
    const data = useStaticQuery(graphql`
    {
      allWpSection(filter: {databaseId: {eq: 851}}) {
        nodes {
          citAchvData {
            achv_val
            achv_title
            achv_ntype {
              label
            }
          }
        }
      }
    }
  `)
    return data
}