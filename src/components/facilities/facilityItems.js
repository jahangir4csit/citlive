import React from "react";
import FacilityItemOne from './facilityItemOne'
import FacilityItemTwo from './facilityTwo'

export default function FacilityItems(data){

    const facilityItems = data.data;
    console.log(facilityItems, 'facilities data');

    return(
        <section className="facilities-placement">
            <div className="container">
                <div class="row">
                    {facilityItems.map(
                        (facilityItem, index)=>{

                            switch(facilityItem.cit_facility_type.value){
                                case "jobplacement": return <FacilityItemOne itemData={facilityItem} key={index} />
                                case "freelancing": return <FacilityItemOne itemData={facilityItem} key={index} />
                                default: return <FacilityItemTwo itemData={facilityItem} key={index} />              
                            }
                        }
                    )}

                </div>
            </div>
        </section>
    )
}