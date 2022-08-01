import React,{useState} from 'react'
//import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'  


export const ModalVid = (data) => {

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)

  return (
      <div className="modal_item_wrap">
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={caseSingle.successStoryLink.successStoryLink} onClose={() => setOpen(false)} />
        <div className='modal_item_in' onClick={()=> setOpen(true)}>
          {caseSingle.featuredImage != null ?
            <img className="img-fluid video_thumb w-100" src={caseSingle.featuredImage.node.sourceUrl} alt={caseSingle.title ? caseSingle.title : 'Success Story'} />
            : 
            <img className="img-fluid video_thumb w-100" src={`https://img.youtube.com/vi/${caseSingle.successStoryLink.successStoryLink}/maxresdefault.jpg`} alt={caseSingle.title ? caseSingle.title : 'Success Story'} />
          }
          <div className="overly_icon">
            <button className="modalvidwrap">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
      </div>
  )

}