import React from "react";

const PartnerItem = (data)=>{
    return(
        <ul>
            {data.partnersinfo.map(
                (item,index)=>(
                    <li key={index}>
                        <img src={item.sourceUrl} alt={item.altText ? item.altText : 'CIT Partner'} />
                    </li>
                )
            )}
        </ul>
    )
}
export default PartnerItem