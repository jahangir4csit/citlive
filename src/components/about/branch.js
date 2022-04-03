import React from "react";

const Branch = (data)=>{

    const branches = data.data;

    return(
        <section id="branch">
            <div class="container">
                <h2>শাখা সমূহ</h2>
                <div class="row">

                    {branches.map(
                        branch=>(
                            <div class="col-md-4 branch">
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