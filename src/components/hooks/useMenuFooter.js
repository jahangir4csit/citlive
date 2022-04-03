import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export const useFooterMenuQuery = () => {
  const menu = useStaticQuery(
    graphql`
    {
        allWpMenu(filter: {locations: {ne: PRIMARY}}) {
        nodes {
        locations
        name
        menuItems {
            nodes {
                label
                url
            }
        }
        }
    }
  }
  `
  )
  return menu.allWpMenu.nodes
}

