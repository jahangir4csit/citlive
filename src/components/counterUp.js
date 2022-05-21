import React from "react"
import { graphql } from "gatsby"
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import Counter from "./utils/counter";
import { useStatCountUp } from "./hooks/useCounterup";


const CounterUp = ()=>{

    const statsData = useStatCountUp();
    const stats = statsData.allWpSection.nodes[0];

    return(
        <section id="couter_up"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        data-sal-easing="ease" 
        >
            <div class="container">
                <div class="row">
                    {
                        stats.citAchvData.map(
                            statsItem=>(
                                <div class="col-lg-2 col-md-4 col-6">
                                    <div class="counter_up_item">
                                        <h5 class="counter"><Counter data={statsItem.achv_val} />{statsItem.achv_ntype.label}</h5>
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
export default CounterUp


