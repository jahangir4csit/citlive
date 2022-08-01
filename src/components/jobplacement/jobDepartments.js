import React from "react";
import { Link } from "gatsby"


export default function JpDepartmentGrid(data){
    
    const title = data.title ? data.title : '';
    const departments = data.data;

    return(
        <section id="training_department" className="mt-0 mb-0">
            <div className="container">
                {title ? <h2>{title}</h2> : ''}

                <div className="training_department_main">
                    {departments.map(
                            (department,index)=>(
                            <Link key={index} to={`/course-cat/`+department.slug}>
                                <div className="training_department_item">
                                    <div className="couse_icon">
                                        <img src={department.categoryThumb.categoryThumbnail.sourceUrl ? department.categoryThumb.categoryThumbnail.sourceUrl : ''} 
                                            alt={department.name} />
                                    </div>
                                    <div className="couse_text">
                                        <h3>{department.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}


