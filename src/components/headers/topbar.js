import * as React from "react"
import callIcon from "../../assets/images/home/call.png"
import topMail from "../../assets/images/home/top-mail.png"
import { useTopbarQuery } from "../hooks/useTopbarQuery"

const Topbar = ()=>{
    const topBarData = useTopbarQuery();
    return(
        <section id="topbar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="topbar_text">
                            <a 
                            data-sal="slide-left"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            href={'tel:'+ topBarData.crbThemeOptions.citPhone}>
                                <span><img src={callIcon} alt="icon" /></span>{topBarData.crbThemeOptions.citPhone}</a>
                            <a 
                            data-sal="slide-left"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease"
                            href={'mailto:'+ topBarData.crbThemeOptions.citEmail}><span><img src={topMail} alt="icon" /></span>{topBarData.crbThemeOptions.citEmail}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Topbar