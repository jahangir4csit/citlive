import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Seminar = (data)=>{
    const seminarDataUpcoming = data.upcomming;
    const seminarBanner = data.secBanner[0];
    console.log(seminarBanner, 'Seminar Banner');
    return(
        <section id="seminar">
            <div class="container seminar">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="seminar_content"
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
                              seminarDataUpcoming.map(
                                seminar=>
                                <li>
                                  <div class="date">{seminar.seminar_meta.seminarDate.day ? seminar.seminar_meta.seminarDate.day : ''} 
                                  <span>{seminar.seminar_meta.seminarDate.month ? seminar.seminar_meta.seminarDate.month : ''}, 
                                  {seminar.seminar_meta.seminarDate.year ? ' '+seminar.seminar_meta.seminarDate.year : ''}</span></div>
                                  <div class="text_main">
                                      <div class="text">
                                        <h4 dangerouslySetInnerHTML={{ __html: seminar.title }} />
                                        <p>{seminar.seminar_meta.venue ? seminar.seminar_meta.venue : seminar.seminar_meta.venueOthers}, 
                                        সময়ঃ {seminar.seminar_meta.seminarTime.timeSlot ? seminar.seminar_meta.seminarTime.timeSlot : ''} 
                                        {seminar.seminar_meta.seminarTime.timeH ? ' '+seminar.seminar_meta.seminarTime.timeH :''}:
                                        {seminar.seminar_meta.seminarTime.timeS ? seminar.seminar_meta.seminarTime.timeS :'00'} টা</p>
                                      </div>
                                      <div class="join_btn">
                                          <Link to="/register-for-free-seminar">জয়েন</Link>
                                      </div>
                                  </div>
                                </li>
                              )
                              : <p>No Seminar Found</p> }
                                
                            </ul>
                            <div class="seminar_btn">
                                <Link
                                data-sal="flip-up"
                                data-sal-delay="600"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                to="/free-seminar">সকল সেমিনারের সময় সূচি </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="free_seminar_img">
                            {seminarBanner.sourceUrl &&
                            <img class="img-fluid w-100" 
                            src={seminarBanner.sourceUrl} 
                            alt={seminarBanner.altText ? seminarBanner.altText : 'Creative IT Institute'} 
                            data-sal="slide-right"
                            data-sal-delay="600"
                            data-sal-duration="1000"
                            data-sal-easing="ease"
                            />
                            }
                            <div class="seminar_dots">
                                <StaticImage class="img-fluid" src="../../images/seminar-dots.png" alt="victor dots" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seminar