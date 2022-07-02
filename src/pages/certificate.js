import React, { useEffect } from "react";
import Layout from "../components/layout"
import Spinner from 'react-bootstrap/Spinner';



export default function Certificate({ location }) {
    // console.log("==================================");
    // console.log('Razib-Jahangir: ',location);
    // console.log("==================================");

    useEffect(() => {
    window.location.replace(`https://www.certificate.creativeit.xyz/${location.search}`);
    }, []);

    console.log(location.search, 'Location search');

    return (
        <Layout>
            <div id="about_top" className="mb-5 pt-5 pb-5 text-center">
                <Spinner animation="border" variant="success" />
                <span className="d-block">
                    Please Wait...
                </span>
            </div>
        </Layout>
    );
}