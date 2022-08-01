import React from "react";
import CourseItemSlider from './CourseItemSlider'

export default function CourseCategorySlider(data){
    const courseCategoryItems = data.categoryItem;
    return(

        <div className="course_catagory_item">
            {courseCategoryItems.courses.nodes.map(
                (courseItem,index)=>(
                <CourseItemSlider singleItem={courseItem} key={index} />
                )
            )}
        </div>
    )

}