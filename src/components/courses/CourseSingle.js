import React from "react";
import { Link } from "gatsby"; 
import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CourseSingle(data){
    const courseItem = data.singleItem;
    return(
        <div class="col-lg-4 col-md-6 col-sm-6 pb-6"
        data-sal="slide-right"
        data-sal-delay={data.delay}
        data-sal-duration="800"
        data-sal-easing="ease">
            <Link to={`/courses/${courseItem.slug}`}>
                <div class="course_single_item admission_item">
                    <div class="course_image">
                        {courseItem.featuredImage !== null ?
                        <img class="img-fluid w-100" src={courseItem.featuredImage.node.sourceUrl} alt={courseItem.title} />
                    : '' }
                    </div>
                    <div class="course_text">
                        {!data.archive &&
                        <h6>{courseItem.courseCategories.nodes[0].name}</h6>
                        }
                        <Link href={`/courses/${courseItem.slug}`}>{courseItem.title}</Link>
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
                            কোর্স ফি {courseItem.course_options.discountFee != null ? courseItem.course_options.discountFee : (courseItem.course_options.courseFee > 0 ? courseItem.course_options.courseFee : courseItem.course_options.courseFee)}৳
                            {courseItem.course_options.discountFee != null ?
                            <del> {courseItem.course_options.courseFee}৳</del> : '' }
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}