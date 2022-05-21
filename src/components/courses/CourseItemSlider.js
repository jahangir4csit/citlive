import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import { Link } from 'gatsby';


export default function CourseItemSlider(data){

  const courseItem = data.singleItem;

      return (

        <Link className="course_slider_item" to={`/courses/${courseItem.slug}`} >
                <div class="course_single_item" >
                    <div class="course_image">
                      {courseItem.featuredImage !== null ?
                        <img class="img-fluid w-100" src={courseItem.featuredImage.node.sourceUrl} alt={courseItem.title} />
                        : '' }
                    </div>
                    <div class="course_text">
                        <h6>{courseItem.courseCategories.nodes[0].name}</h6>
                        <Link to={`/courses/${courseItem.slug}`}>{courseItem.title}</Link>
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    {courseItem.course_options.reviewsCount ? courseItem.course_options.reviewsCount : '0'} রিভিউস</span>
                                <span class="stu">{courseItem.course_options.studentsIn ? courseItem.course_options.studentsIn : 0} স্টুডেন্ট</span>
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
