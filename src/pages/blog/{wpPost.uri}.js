import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import BlogRelatedPosts from "../../components/blog/blogRelatedPosts";
import BlogSidebar from '../../components/blog/blogSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

const BlogTemplate = ({data}) => {


    return(
        <Layout>
            <section className="blog_news">
                <div className="container">
                    <div className="navbar_btn text-center d-md-none">
                        <a href="/our-courses"><img src="images/home/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i className="fa fa-angle-down ps-2"></i></a>
                    </div>
                    <div className="blog_menu">
                        <ul>
                            <li><a href="#">ওয়েব এন্ড সফটওয়ার</a></li>
                            <li><a href="#">গ্রাফিক্স ডিজাইন</a></li>
                            <li><a href="#">ডিজিটাল মার্কেটিং</a></li>
                            <li><a href="#">এনিমেশন ও ভিজিয়ালাইজেশন</a></li>
                            <li><a href="#">অন্যান্য <i className="fa fa-angle-down"></i></a></li>
                        </ul>

                    </div>
                </div>
            </section>
            <section id="blog_dtails_main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="blog_dtails">
                                <div className="heading">
                                    <h3>{data.post.categories.nodes[0].name}</h3>
                                    <h2>{data.post.title}</h2>
                                    <p>পোস্ট / {data.post.author.node.name} <span>মে  ২৫, ২০২১</span></p>
                                </div>
                                <div className="image">
                                {data.post.featuredImage ?
                                    <img className="img-fluid w-100" src={data.post.featuredImage.node.sourceUrl} alt="image" />
                                : ''}
                                </div>
                                <div className="dtails" dangerouslySetInnerHTML={{ __html: data.post.content }} />
                            </div>

                            <div className="tag_share">
                                <div className="tag">
                                    <label for="">ট্যাগ</label>
                                    <a href="#">কর্পোরেট</a>
                                    <a href="#">ডিজাইন</a>
                                    <a href="#">ডেভেলপমেন্ট</a>
                                </div>
                                <div className="share">
                                    <label for="">শেয়ার</label>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
            <BlogRelatedPosts />
        </Layout>
    )
}

export default BlogTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MMMM, YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
      featuredImage {
        node {
        sourceUrl
        }
        }
    }
  }
`


