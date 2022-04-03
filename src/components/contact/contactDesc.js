import React from "react";

const ContactDesc = (data)=>{
    const contactData = data.data;
    return(
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="facilities_heading ">
                            <h2>{contactData.title}</h2>
                            <div className="dtails" dangerouslySetInnerHTML={{ __html: contactData.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactDesc