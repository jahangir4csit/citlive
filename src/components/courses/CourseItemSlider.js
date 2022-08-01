import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'gatsby';


export default function CourseItemSlider(data){

  const courseItem = data.singleItem;

      return (

        <Link className="course_slider_item" to={`/courses/${courseItem.slug}`} >
                <div className="course_single_item" >
                    <div className="course_image">
                      {courseItem.featuredImage !== null ?
                        <img className="img-fluid w-100" src={courseItem.featuredImage.node.sourceUrl} alt={courseItem.title} />
                        : '' }
                    </div>
                    <div className="course_text">
                        <h6>{courseItem.courseCategories.nodes[0].name}</h6>
                        <h3>{courseItem.title}</h3>
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    {courseItem.course_options.reviewsCount ? courseItem.course_options.reviewsCount : '0'} রিভিউস</span>
                                <span className="stu">{courseItem.course_options.studentsIn ? courseItem.course_options.studentsIn : 0} স্টুডেন্ট</span>
                            </li>
                        </ul>
                        <p>
                          কোর্স ফি {courseItem.course_options.discountFee !== null ? courseItem.course_options.discountFee : courseItem.course_options.courseFee} ৳
                          {courseItem.course_options.discountFee !== null ?
                          <del> {courseItem.course_options.courseFee} ৳</del> : '' }
                        </p>
                    </div>
                </div>
            </Link>

      );
  }
