import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import { Lightbox } from "react-modal-image";


export const ImgModal = (data) => {

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const imgSingle = data.imgData;

    const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
        {open && 
        <Lightbox
        medium={imgSingle.media_details.sizes.medium.source_url}
        large={imgSingle.media_details.sizes.large.source_url}
        alt={imgSingle.alt_text}
        hideDownload
        onClose={() => setOpen(false)}
        />
        }
      <div className="modalImgWrap img-hover-zoom">
        <img class="img-fluid w-100" src={imgSingle.media_details.sizes.medium.source_url} alt={imgSingle.alt_text ? imgSingle.alt_text : 'Gallery Image'} />
        <button class="img-overlay" onClick={()=> setOpen(true)}></button>
      </div>
    </React.Fragment>
  )

}