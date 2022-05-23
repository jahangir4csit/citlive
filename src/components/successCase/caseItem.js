import React from "react";
import { ModalVid } from "../utils/modal"; 

export default function CaseItem(data){
    const caseData = data.data;
    const mb = data.marginBottom
    console.log(caseData, 'case data achv');

    return(        
        <div class="col-md-6">
            <div class="success_item" style={{ marginBottom: mb ? '30px' : '0' }}>
                {/* {caseData.featuredImage && caseData.successStoryLink ? */}
                {caseData.successStoryLink ?
                <ModalVid videoData={caseData} />
                : 'Blank Item'}
            </div>
        </div>
    )
}