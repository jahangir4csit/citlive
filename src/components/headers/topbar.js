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
                            <a href={'tel:'+ topBarData.crbThemeOptions.citPhone}>
                                <span><img src={callIcon} alt="icon" /></span>{topBarData.crbThemeOptions.citPhone}</a>
                            <a href={'mailto:'+ topBarData.crbThemeOptions.citEmail}><span><img src={topMail} alt="icon" /></span>{topBarData.crbThemeOptions.citEmail}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Topbar