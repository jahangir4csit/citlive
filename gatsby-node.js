const path = require(`path`)
const fs = require('fs');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return await graphql(`
    {
      allWpCourse(sort: {fields: date}) {
        nodes {
          title
          slug
          uri
          id
          content
          pageMeta {
            metaTitle
            metaDescription
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          course_options {
            courseFee
            discountFee
            courseFeeOnline
            courseFeeOnlineDiscount
            studentsIn
            courseDuration
            classPerWeek
            admissionLink
            courseVideo
            courseSubTitle
            isAdmissionOpen
            isSeminar
            seminarLink
            totalLecture
            courseVideoUrl
            courseVideoThumbnail {
              sourceUrl
            }
            
          }
        }
      }
      allWpCourseCategory {
        nodes {
          slug
          name
          id
          categoryThumb {
            categoryThumbnail {
              sourceUrl
            }
          }
        }
      }
      
    }
  `).then(result => {
    //highlight-start
    result.data.allWpCourse.nodes.forEach(node => {
      createPage({
        //path: encodeURI(node.uri),
        path: node.uri,
        component: path.resolve(`./src/templates/singleCourse.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
        },
      })
    })
    //highlight-end
    result.data.allWpCourseCategory.nodes.forEach(node => {
      createPage({
        //path: encodeURI(node.uri),
        path: `/course-cat/${node.slug}`,
        component: path.resolve(`./src/templates/CourseArchive.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
          name: node.name
        },
      })
    })
  })
}

exports.onPostBuild = () => {
  if (fs.existsSync('./public/sitemap-0.xml')) {
    fs.renameSync('./public/sitemap-0.xml', './public/sitemap.xml');
  }
};
