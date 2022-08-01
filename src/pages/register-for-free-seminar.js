import React, { Fragment, useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Seo from "../components/seo"

//import gql from 'graphql-tag';
//import { Mutation } from 'react-apollo';
import Layout from "../components/layout";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useCourses } from "../components/hooks/useCourses";

import {
  gql,
  useMutation
} from "@apollo/client";


const RegSeminar = ({location}) => {


  const courseslists = useCourses();

  const courseId = location.state ? location.state.id : '0';
  const resetInput = () => {
    setNameValue('');
    setMobileValue('');
    setEmailValue('');
    setAddressValue('');
  };

  const [getLocation, setLocation] = useState(courseId)
  const [nameVal, setNameValue] = useState(' ')
  const [mobileVal, setMobileValue] = useState(' ')
  const [emailVal, setEmailValue] = useState(' ')
  const [addressVal, setAddressValue] = useState(' ')
  const [courseVal, setCourseValue] = useState(' ')
  const submitDate = new Date().toLocaleDateString();

  const SEMINAR_MUTATION = gql`
  mutation CreateSubmissionMutation{
    createSubmission(input: {clientMutationId: "seminarEntry", name: "${nameVal}", mobile: "${mobileVal}",  email: "${emailVal}", address: "${addressVal}", course: "${courseVal}", submitted: "${submitDate}" }) {
      data
      success
    }
  }
`;
  

  const [createSubmission, { loading, error, data }] = useMutation(SEMINAR_MUTATION,{
    onCompleted: resetInput
  });

  //if (loading) return 'Submitting...';
  //if (error) return `Submission error! ${error.message}`;

  //console.log(location.state.id, 'location state');

  return (
    <Layout>
      <Seo 
      title="Free Seminar Registration - Creative IT Institute" 
      description="Join our free seminar learn get an idea about Graphic Design, Web Software, Digital
      Marketing, Networking, Film Media, Robotics Automation etc Call 880 1624666000
      for registration" />
      <section id="admission" className='mt-5 pt-5 pb-5 mb-5'>
          <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-12 m-auto">
                    <div className="section_heading mb-5 pt-5">
                        <h1 className="font-600">জয়েন ফ্রি সেমিনার</h1>
                    </div>
                    {/* <Mutation mutation={useMutation(SEMINAR_MUTATION)}> */}
                    {/* {(createSubmission, { loading, error, data }) => ( */}
                    <React.Fragment>
                      <Form 
                        onSubmit={async event => {
                          event.preventDefault()
                          createSubmission({
                            variables: {
                              clientMutationId: 'seminarEntry',
                              name: nameVal,
                              mobile: mobileVal,
                              email: emailVal,
                              address: addressVal,
                              course: courseVal,
                              submitted: submitDate
                            }
                          })
                        }}
                      >

                      <Form.Group className="mb-3 seminar-form" controlId="formBasicEmail">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার নাম"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="text" 
                          placeholder="নাম" 
                          value={nameVal}
                          onChange={event => {
                            setNameValue(event.target.value)
                          }}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার ফোন নাম্বার"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="text" 
                          placeholder="ফোন নাম্বার" 
                          value={mobileVal}
                          onChange={event => {
                            setMobileValue(event.target.value)
                          }}
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="আপনার ইমেইল"
                          className="mb-3"
                        >
                          <Form.Control 
                          size="lg" 
                          type="text" 
                          placeholder="ইমেইল"
                          value={emailVal}
                          onChange={event => {
                            setEmailValue(event.target.value)
                          }} 
                          />
                        </FloatingLabel>
                        <Row className="g-2 mb-3 align-items-center">
                        <Col md={3}>
                          <Form.Label htmlFor="select-label"
                          >কোর্স সিলেক্ট করুন</Form.Label>
                        </Col>
                        <Col md={9}>
                          <Form.Select 
                              aria-label="Floating"
                              size="lg" 
                              value={getLocation} 
                              onChange={event => {
                                setCourseValue(event.target.value)
                                setLocation(event.target.value)
                              }}
                              >
                              {location.state && !location.state.id ?
                                <option value='select'>Select Course</option> : ''
                              }
                              {courseslists.allWpCourse.nodes.map(
                                (course, index) => <option key={index} value={course.databaseId} >{course.title}</option>
                              )}
                          </Form.Select>
                        </Col>
                        </Row>
                        
                        <FloatingLabel controlId="floatingTextarea2" label="আপনার ঠিকানা">
                          <Form.Control
                            as="textarea"
                            placeholder="ঠিকানা"
                            style={{ height: '100px' }}
                            value={addressVal}
                            onChange={event => {
                              setAddressValue(event.target.value)
                            }}
                          />
                        </FloatingLabel>

                      </Form.Group>
                      <Button className="btn-formSend" variant="primary" type="submit">
                        সাবমিট
                        {loading &&
                        <Fragment>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </Fragment>
                        }
                      </Button>
                    </Form> 
                      {error && (
                        <Alert variant="danger" className="mt-3">
                        <p>An unknown error has occured, please try again later...</p>
                        </Alert>
                      )}
                      {data &&
                      <Alert variant="success" className="mt-3">
                        <p>ধন্যবাদ, শীঘ্রই আপনার সাথে যোগাযোগ করা হবে </p>
                      </Alert>
                      }
                    </React.Fragment>
                    {/* )}
                    </Mutation>  */}
                </div>
            </div>
          </div>
      </section>

    </Layout>
  )

}

export default RegSeminar;
