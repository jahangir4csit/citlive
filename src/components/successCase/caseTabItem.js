import React, { useState, useEffect } from "react"
import CaseItem from "./caseItem";

export default function CaseTabItem(data){

    const caseTabData = data.data;
    console.log(caseTabData, 'case Tabs');


    return(
        <div class="col-12" id="graphics">
            <div class="row success_body g-4">
                {caseTabData.map(
                    (storyItem, index) =>(
                        <CaseItem data={storyItem} key={index} />
                    )
                )}
            </div>
        </div>
    )
}

