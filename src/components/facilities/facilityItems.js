import React from "react";
import FacilityItemOne from './facilityItemOne'
import FacilityItemTwo from './facilityTwo'

export default function FacilityItems(){

    return(
        <section className="facilities-placement">
            <div className="container">
                <div class="row">
                    <FacilityItemOne />
                    <FacilityItemOne />
                    <FacilityItemTwo />
                    <FacilityItemTwo />
                    <FacilityItemTwo />
                    <FacilityItemTwo />
                </div>
            </div>
        </section>
    )
}