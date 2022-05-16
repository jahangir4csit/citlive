import React from "react";

const PartnerItem = (data)=>{
    return(
        <ul>
            {data.partnersinfo.map(
                item=>(
                    <li>
                        <img src={item.sourceUrl} alt={item.altText ? item.altText : 'CIT Partner'} />
                    </li>
                )
            )}
        </ul>
    )
}
export default PartnerItem