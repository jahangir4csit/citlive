import React from "react";
import { ModalVid } from "../utils/modal"; 

export default function CaseItem(data){
    const caseData = data.data;



    return(        
        <div class="col-md-6">
            <div class="success_item">
                {/* {caseData.featuredImage && caseData.successStoryLink ? */}
                {caseData.successStoryLink ?
                <ModalVid videoData={caseData} />
                : 'Blank Item'}
            </div>
        </div>
    )
}