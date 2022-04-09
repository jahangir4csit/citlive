import React from "react";
import FacilityItemOne from './facilityItemOne'
import FacilityItemTwo from './facilityTwo'

export default function FacilityItems(){

    return(
        <section className="facilities-placement">
            <div className="container">
                <div class="row job_placement">
                    <FacilityItemOne />
                    <FacilityItemTwo />
                    <FacilityItemTwo />
                </div>
            </div>
        </section>
    )
}