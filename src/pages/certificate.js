import React, { useState, useEffect } from "react"
import axios from 'axios'
function Certificate() {

  const [student, setStudent] = useState();

    // const makeAPICall = () => {
    //     const response = fetch('https://citibd.com/student/get_certificate/WEB%20DEV-18090413', {
    //         "mode":'no-cors',
    //         "method": "GET",
    //         "headers": {
    //             'Accept': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         },
    //         //body: JSON.stringify(student), 
    //     })
    //     .then(response => response.json())
    //     //.then(data => console.log(data, 'Data'))
    //     .then(response => {
    //       console.log(response.body)
    //       setStudent({
    //         student: response
    //       })
    //     })
    //     .catch(err => { console.log(err); 
    //     });
    //     console.log(student, 'response data')
    // }
    useEffect(() => {


     async function makeAPICall (){
      let {data} = await axios('https://citibd.com/student/get_certificate/WEB%20DEV-18090413')
      console.log(data)
     }

        makeAPICall();
    }, [])

  return (
        <section>
      <p>
        Build Time Data: Gatsby repo{` `}
        
      </p>
    </section>
  );
}

export default Certificate;