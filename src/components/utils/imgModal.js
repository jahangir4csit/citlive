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
        medium={imgSingle.sourceUrl}
        large={imgSingle.sourceUrl}
        alt={imgSingle.title}
        hideDownload
        onClose={() => setOpen(false)}
        />
        }
      <div className="modalImgWrap img-hover-zoom" >
        <img class="img-fluid w-100" src={imgSingle.sourceUrl} alt={imgSingle.title ? imgSingle.title : 'Gallery Image'} />
        <button class="img-overlay" onClick={()=> setOpen(true)}></button>
      </div>
    </React.Fragment>
  )

}