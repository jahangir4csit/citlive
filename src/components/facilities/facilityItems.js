import React from "react";
import FacilityItemOne from './facilityItemOne'
import FacilityItemTwo from './facilityItemTwo'
import FacilityItemDefault from './facilityItemDefault'

export default function FacilityItems(data){

    const facilityItems = data.data ? data.data : [];

    return(
        <section className="facilities-placement">
            <div className="container">
                <div className="row">
                {
                    facilityItems.map(
                        (facilityItem, index)=>{

                            switch(facilityItem.cit_facility_type){
                                case "jobplacement": return <FacilityItemOne itemData={facilityItem} key={index} />
                                case "freelancing": return <FacilityItemTwo itemData={facilityItem} key={index} />
                                default: return <FacilityItemDefault itemData={facilityItem} key={index} />              
                            }
                        }
                    )}

                </div>
            </div>
        </section>
    )
}