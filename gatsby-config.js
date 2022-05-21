module.exports = {
  siteMetadata: {
    title: ``,
    description: `Develop your professional personal skills through Creative IT Institute We provide
    Graphic Design, Web Software, Digital Marketing, Networking, Film Media,
    Robotics Automation Training etc affordable price. Call +880 162 4666000`,
    author: `@Jahangir Ahmed`,
    siteUrl: `https://creativeitinstitute.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,  
      options: {
        //url: `https://bangladeshigf.org/cit/graphql`,
        //url: `http://cit.creativejuniors.com/graphql`,
        url: `http://localhost/citbd/graphql`
        //url: `https://www.creativeitinstitute.com/citdev21/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.creativeitinstitute.com/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Hind+Siliguri:300,400,500,600,700`, `source sans pro:300,400,500,600,700`,
          `Roboto:300,400,500,700,900`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-smoothscroll`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
