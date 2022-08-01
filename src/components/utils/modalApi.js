import React,{useState} from 'react'
//import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'  


export const ModalVidApi = (data) => {

    if (typeof window === 'undefined') {
        global.window = {}
    }
    const caseSingle = data.videoData;

    const [isOpen, setOpen] = useState(false)

  return (
      <div className="modal_item_wrap">
        {caseSingle.better_featured_image != null ?
          <img className="img-fluid w-100" src={caseSingle.better_featured_image.source_url} alt={caseSingle.title ? caseSingle.title.rendered : 'Success Story'} />
          : 
          <img className="img-fluid w-100" src={`https://img.youtube.com/vi/${caseSingle.success_story_link}/maxresdefault.jpg`} alt={caseSingle.title.rendered ? caseSingle.title.rendered : 'Success Story'} />
        }
        <div className="overly_icon">
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={caseSingle.success_story_link} onClose={() => setOpen(false)} />
          <button className="modalvidwrap" onClick={()=> setOpen(true)}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
  )

}