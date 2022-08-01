import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BlogSidebar = ()=>{
    return(      
        <div className="col-md-4 offset-lg-1 offset-md-1">
            <div className="author">
                <label><StaticImage src="../../images/blog_dtails/Author-label.png" alt="label image" /></label>
                <div className="image">
                    <StaticImage className="img-fluid" src="../../images/blog_dtails/Author.png" alt="image" />
                </div>
                <div className="text">
                    <h4>শোহিদুর রহমান</h4>
                    <h5>বিভাগীয় প্রধান, গ্রাফিক্স ডিজাইন মাল্টিমিডিয়া</h5>
                    <p>আমাদের শিক্ষার্থীদের সাফল্যের গোপনীয়তা হ'ল আমরা কেবল তাদের দক্ষতা বিকাশের জন্য প্রশিক্ষণই দিচ্ছি না তবে তারা তাদের ক্যারিয়ারে সফল হওয়া অবধি তাদের পরামর্শদাতাও সরবরাহ করে।</p>
                    <div className="icon">
                        <a className="facebook" href="#"><i className="fa fa-facebook-f"></i></a>
                        <a className="instagram" href="#"><i className="fa fa-instagram"></i></a>
                        <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                        <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="coures_discount">
                <a href="#">
                    <StaticImage className="img-fluid w-100" src="../../images/blog_dtails/course-discount.png" alt="image" />
                </a>
            </div>
            <div className="seminar_discount">
                <a href="#">
                    <StaticImage className="img-fluid w-100" src="../../images/blog_dtails/seminar-discount.png" alt="image" />
                </a>
            </div>
        </div>
    )
}
export default BlogSidebar