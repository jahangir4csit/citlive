import React from "react"
export default function singleSidebar(props) {
    return (

        <div class="pg_wait">
            <h3>আর অপেক্ষা কেনো?</h3>
            <p>এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে কোন একটি পদ্ধতিতে ভর্তি হতে পারো </p>
            <div class="join_offline_main">
                {post.course_options.courseFee !== null ?
                <div class="join_offline">
                    <h4>জয়েন অফলাইন ব্যাচ</h4>
                    <p>৳ {props.offlineFee} টাকা মাত্র</p>
                    <a href="#">ভর্তি হবো</a>
                </div>
                : ''}
                {post.course_options.courseFeeOnline !== null ?
                <div class="join_offline">
                    <h4>জয়েন অনলাইন ব্যাচ</h4>
                    <p>৳ {props.onlineFee} টাকা মাত্র</p>
                    <a href="#">ভর্তি হবো</a>
                </div>
                : ''}
            </div>
            <div class="wait_btn text-center">
                <a href="#">ফ্রি সেমিনারে জয়েন করবো </a>
            </div>
        </div>
    )
}