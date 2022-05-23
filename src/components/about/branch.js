import React from "react";

const Branch = (data)=>{

    const branches = data.data;

    return(
        <section id="branch">
            <div class="container">
                <h2
                data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="800"
                data-sal-easing="ease"
                >শাখা সমূহ</h2>
                <div class="row">

                    {branches.map(
                        (branch, index)=>(
                            <div class="col-md-4 branch"
                            data-sal="flip-right"
                            data-sal-delay={index*=200}
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            >
                                <div class="branch_item" style={{ backgroundColor: branch.box_color }}>
                                    <h4>{branch.branch_title}</h4>
                                    <p className="dtails" dangerouslySetInnerHTML={{ __html: branch.branch_address }} />
                                </div>
                            </div>
                        )
                    )}

                </div>
            </div>
        </section>
    )
}
export default Branch