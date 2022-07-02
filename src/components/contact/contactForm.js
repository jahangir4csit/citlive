import React, { Fragment, useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useCourses } from "../hooks/useCourses";

const ContactForm = (data)=>{

    const courseslists = useCourses();
    const courseTitleLists = data.courseList;
    const resetInput = () => {
        setNameValue('');
        setMobileValue('');
        setEmailValue('');
        setAddressValue('');
      };
    
      const [nameVal, setNameValue] = useState('')
      const [mobileVal, setMobileValue] = useState('')
      const [emailVal, setEmailValue] = useState('')
      const [addressVal, setAddressValue] = useState('')
      const [courseVal, setCourseValue] = useState('')

    return(
        <section id="question" className="pb-5 mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-12 m-auto">
                        <h3 class="f_Q">আপনার কোন প্রশ্ন থাকলে আমাদের করুন</h3>
                        <React.Fragment>
                            <Form className="student_form" action="/contact-us" method="post">
                                <Form.Group className="mb-3 " controlId="formBasicEmail">
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
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail">
                                    <Row>
                                        <Col>
                                            <FloatingLabel
                                            controlId="floatingInput"
                                            label="আপনার ইমেইল"
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
                                        </Col>
                                        <Col>
                                            <FloatingLabel
                                            controlId="floatingInput"
                                            label="আপনার ফোন নাম্বার"
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
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Select 
                                                aria-label="Floating"
                                                size="lg" 
                                                value={courseVal} 
                                                onChange={event => {
                                                    setCourseValue(event.target.value)
                                                }}
                                                >
                                                <option value='select'>Select Course</option>
                                                {courseslists.allWpCourse.nodes.map(
                                                    course => <option value={course.databaseId} >{course.title}</option>
                                                )}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingTextarea2" label="বিস্তারিত লিখুন">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="বিস্তারিত লিখুন"
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
                                    {/* {loading && */}
                                    <Fragment>
                                    {/* <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    /> */}
                                    </Fragment>
                                    {/* } */}
                                </Button>
                            </Form>
                            {/* {error && (
                            <Alert variant="danger" className="mt-3">
                            <p>An unknown error has occured, please try again later...</p>
                            </Alert>
                            )}
                            {data &&
                            <Alert variant="success" className="mt-3">
                                <p>ধন্যবাদ, শীঘ্রই আপনার সাথে যোগাযোগ করা হবে </p>
                            </Alert>
                            } */}
                        </React.Fragment> 
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default ContactForm