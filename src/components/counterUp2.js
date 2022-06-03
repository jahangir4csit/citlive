import React from "react"
import { graphql } from "gatsby"
//import CountUp from 'react-countup';
//import { useCountUp } from 'react-countup';
import Counter from "./utils/counter";
import { useStatCountUp } from "./hooks/useCounterup";


const CounterUp2 = (data)=>{

    const statsData = useStatCountUp();
    const stats = statsData.allWpSection.nodes[0];
    const boxbg = data.boxbg;

    return(
        <section id="couter_up">
            <div class="container">
                <div class="row">
                    {
                        stats.citAchvData.map(
                            statsItem=>(
                                <div class="col-lg-4 col-md-4 col-6">
                                    <div class="counter_up_item counter_up_style2" style={{ backgroundColor: boxbg ? statsItem.achv_boxbg : '#FAF9FD' }}>
                                        <h5 class="counter" style={{ color: boxbg ? statsItem.achv_heading_color : '#CF0000' }}><Counter data={statsItem.achv_val} />{statsItem.achv_ntype.label}</h5>
                                        <p>{statsItem.achv_title}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                    
                </div>
            </div>
        </section>
    )
}
export default CounterUp2


