import React from "react";
import { Link } from "gatsby"
import seminarDot from '../../images/seminar-dots.png';

import SeminarItem from '../seminar/seminarItem'

const Seminar = (data)=>{
    const seminarDataUpcoming = data.upcomming;
    const seminarBanner = data.secBanner[0];
    const currentDate = new Date();

    return(
        <section id="seminar">
            <div className="container seminar">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="seminar_content"
                        data-sal="slide-left"
                        data-sal-delay="500"
                        data-sal-duration="800"
                        data-sal-easing="ease"
                        >
                            <h2 dangerouslySetInnerHTML={{ __html: data.secHeading ? data.secHeading : 'জয়েন ফ্রি সেমিনার' }} />
                            <p dangerouslySetInnerHTML={{ __html: data.secDesc }} />
                            <h3>আপকামিং ফ্রি সেমিনার</h3>
                            <ul>
                              {seminarDataUpcoming.length > 0 ?
                              seminarDataUpcoming.filter(
                                seminar=>{
                                const dateTime = new Date(seminar.seminar_meta.scheduleDate);

                                return currentDate < dateTime

                                }
                              ).slice(0, 2).map(
                                (seminar, index)=>{

                                const dateTime = new Date(seminar.seminar_meta.scheduleDate);
                                const year = dateTime.getUTCFullYear();
                                const day = dateTime.getUTCDate();
                                const month = dateTime.getUTCMonth() + 1;
                                return <SeminarItem day={day} year={year} month={month} seminarData={seminar} key={index} />
                                }

                                // if (currentDate < dateTime || (currentDate-(1 * 24 * 60 * 60 * 1000)) < dateTime) {
                                //     return <SeminarItem day={day} year={year} month={month} seminarData={seminar} key={index} />
                                // }

                                // <li>
                                //   <div className="date">{seminar.seminar_meta.seminarDate.day ? seminar.seminar_meta.seminarDate.day : ''} 
                                //   <span>{seminar.seminar_meta.seminarDate.month ? seminar.seminar_meta.seminarDate.month : ''}, 
                                //   {seminar.seminar_meta.seminarDate.year ? ' '+seminar.seminar_meta.seminarDate.year : ''}</span></div>
                                //   <div className="text_main">
                                //       <div className="text">
                                //         <h4 dangerouslySetInnerHTML={{ __html: seminar.title }} />
                                //         <p>{seminar.seminar_meta.venue ? seminar.seminar_meta.venue : seminar.seminar_meta.venueOthers}, 
                                //         সময়ঃ {seminar.seminar_meta.seminarTime.timeSlot ? seminar.seminar_meta.seminarTime.timeSlot : ''} 
                                //         {seminar.seminar_meta.seminarTime.timeH ? ' '+seminar.seminar_meta.seminarTime.timeH :''}:
                                //         {seminar.seminar_meta.seminarTime.timeS ? seminar.seminar_meta.seminarTime.timeS :'00'} টা</p>
                                //       </div>
                                //       <div className="join_btn">
                                //           <Link 
                                //           to={`/register-for-free-seminar/`} 
                                //           state={{ id: seminar.seminar_meta.course ? seminar.seminar_meta.course.databaseId : 0 }}
                                //           >জয়েন</Link>
                                //       </div>
                                //   </div>
                                // </li>

                                
                              )
                              : <p>No Seminar Found</p> }
                                
                            </ul>
                            <div className="seminar_btn">
                                <Link
                                data-sal="flip-up"
                                data-sal-delay="600"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                to="/free-seminar">সকল সেমিনারের সময় সূচি </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="free_seminar_img">
                            {seminarBanner.sourceUrl &&
                            <img className="img-fluid w-100" 
                            src={seminarBanner.sourceUrl} 
                            alt={seminarBanner.altText ? seminarBanner.altText : 'Creative IT Institute'} 
                            data-sal="slide-right"
                            data-sal-delay="600"
                            data-sal-duration="1000"
                            data-sal-easing="ease"
                            />
                            }
                            <div className="seminar_dots">
                                <img className="img-fluid" src={seminarDot} alt="victor dots" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seminar
