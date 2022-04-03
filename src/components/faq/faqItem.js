import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import { ImgModal } from "../utils/imgModal";

export default function FaqItem(data){
    const faqItemData = data.data;

    return(        
        // <div class="col-md-6">
        //     <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={data.key} className="col-md-6">
                    <Accordion.Header>{faqItemData.title + data.key}</Accordion.Header>
                    <Accordion.Body>
                    {faqItemData.crb_faq_ans}
                    </Accordion.Body>
                </Accordion.Item>
        //     </Accordion>
        // </div>
    )
}