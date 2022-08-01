import React from "react";
//import { isEmpty } from "lodash";
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


export default function DepartmentGrid(data){
    
    const title = data.title ? data.title : '';
    const secMarginTop = data.marginTop ? data.marginTop : '';
    const secMarginBottom = data.marginBottom ? data.marginBottom : '';
    const boxShadow = data.boxShadow ? data.boxShadow : '';

    // const courseCatList = data;
    // console.log(courseCatList, 'grid list');
    // const excludeTrmId = 673;
    // const courseCat = courseCatList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });

    const styles = {
        boxStyle: {
            'a':{
                border: '0',
            },
            shadow: {
                boxShadow: '5px 5px 60px rgb(0 0 0 / 6%)',
                webkitBoxShadow: '5px 5px 60px rgb(0 0 0 / 6%)',
                borderRadius: '20px',
            },
            none: {}
        }
    }

    return(
        <StaticQuery
            query={graphql`
                {
                    allWpCourseCategory(skip: 1) {
                        nodes {
                          name
                          slug
                          link
                          termTaxonomyId
                          categoryThumb {
                            categoryThumbnail {
                              sourceUrl
                            }
                          }
                        }
                      }
                }
            `}
            render={catData => (
                
                <section id="training_department" style={{ marginTop: secMarginTop, marginBottom: secMarginBottom}}>
                    <div className="container">
                        {title ? <h2
                        data-sal="slide-left"
                        data-sal-delay="300"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >{title}</h2> : ''}

                        <div className="training_department_main">
                            {catData.allWpCourseCategory.nodes.map(
                                 (item, index)=>(

                                <Link key={index} to={`/course-cat/`+item.slug} style={boxShadow ? styles.boxStyle.a : styles.boxStyle.none}
                                data-sal="slide-left"
                                data-sal-delay={index*=300}
                                data-sal-duration="900"
                                data-sal-easing="ease"
                                >
                                    <div className="training_department_item" 
                                    style={boxShadow ? styles.boxStyle.shadow : styles.boxStyle.none}>
                                        <div className="couse_icon">
                                            <img src={item.categoryThumb.categoryThumbnail.sourceUrl ? item.categoryThumb.categoryThumbnail.sourceUrl : ''} 
                                                alt={item.name} />
                                        </div>
                                        <div className="couse_text">
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </Link>

                                )
                            )}
                        </div>
                    </div>
                </section>
            )}
            />


  )
}


