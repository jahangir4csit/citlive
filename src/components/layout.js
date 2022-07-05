/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See:
 */

import { graphql, useStaticQuery } from "gatsby"
import {Helmet} from "react-helmet";
import PropTypes from "prop-types"
import * as React from "react"
import ModalPopup from '../components/homepage/modalPopup'
import "../assets/css/responsive.css"
/* ** Importing style *** */
import "../assets/css/style.css"
import Footer from "./footer/footer"
import Header from "./headers/header"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "http://www.schema.org",
          "@type": "LocalBusiness",
          "name": "Creative IT Institute",
          "url": "https://www.creativeitinstitute.com/",
          "sameAs": [
            "https://www.pinterest.com/creativeitinstitute",
            "https://www.youtube.com/c/CreativeITInstitute",
            "https://www.instagram.com/creativeitinstitute",
            "https://www.linkedin.com/company/creativeitinstitute",
            "https://www.facebook.com/CreativeITInstitute"
          ],
          "logo": "https://www.creativeitinstitute.com/logo.png",
          "image": "https://www.creativeitinstitute.com/banner.jpg",
          "description": "Creative IT is an institution where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs under ISO 9001: 2008 certification which remarks us in the IT world.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Momtaz Plaza (4th floor), House#7, Road#4",
            "addressLocality": "Dhanmondi",
            "addressRegion": "Dhaka",
            "postalCode": "1205",
            "addressCountry": "Bangladesh"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.7413074",
            "longitude": "90.3803915"
          },
          "hasMap": "https://www.google.com/maps/place/Creative+IT+Institute/@23.7413074,90.3803915,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b7a55cd36f:0xfcc5b021faff43ea!8m2!3d23.7413025!4d90.3825802",
          "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 09:00-20:00",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+880 1624666000"
          }
        }
       `}</script>
      </Helmet>
      <div
        style={{
          width: `100%`,
        }}
      >
        <main>{children}</main>
      <Footer />
      {/* <ModalPopup /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
