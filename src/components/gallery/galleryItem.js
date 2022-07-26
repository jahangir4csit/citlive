import React from "react";
import { ImgModal } from "../utils/imgModal";

export default function GalleryItem(data){
    const galleryItemData = data.data;

    return(        
        <div class="col-md-4">
            {galleryItemData.sourceUrl ? 
                <ImgModal imgData={galleryItemData} />
            : 'Blank Item'}
        </div>
    )
}