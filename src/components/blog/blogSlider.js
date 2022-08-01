import React from "react";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import { Link } from "gatsby";
import { useLatestBlogPost } from '../hooks/useLatestBlogPost';
import calenderIcon from '../../images/calendar.png';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="nextarrow">
            <FontAwesomeIcon icon={faChevronRight}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="prevarrow">
            <FontAwesomeIcon icon={faChevronLeft}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }

export default function BlogSlider(secData) {

    const data = useLatestBlogPost();

        const settings = {
          className: "blog_slider",
          autoplay:false,
          slidesToShow:3,
          slidesToScroll:1,
          arrows:true,
          dots:false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
        };

    return(
        <section id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blog_heading">
                            <h2 dangerouslySetInnerHTML={{ __html: secData.secHeading ? secData.secHeading : 'ব্লগ এবং প্রেস রিলিজ' }} />
                        </div>
                    </div>
                    <div className="col-12">
                        <Slider {...settings}>

                            {data.allWpPost.edges.map(
                                (blogdata,index)=>(
                                <div key={index}>
                                    <div className="blog_slide_item">
                                        <div className="blog_item">
                                            <div className="blog_img">
                                                {console.log(blogdata.node.featuredImage, 'blog featured img')}
                                                {blogdata.node.featuredImage ?
                                                
                                                <img className="img-fluid w-100" src={blogdata.node.featuredImage.node.sourceUrl} alt="image" />
                                                : '' }
                                            </div>
                                            <div className="blog_text">
                                                <h6><span>{blogdata.node.categories.nodes[0].name}</span>
                                                <img src={calenderIcon} alt="image" />
                                                {blogdata.node.date}</h6>
                                                <h3>{blogdata.node.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: blogdata.node.excerpt }} />
                                                
                                                <Link to={`blog${blogdata.node.uri}`}>আরও পড়ুন</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            )}

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}