import React, { useState } from "react";
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

const SEMINAR_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $mobile: String!, $email: String!, $address: String!, $course: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, name: $name, mobile: $mobile,  email: $email, address: $address, course: $course}) {
      success
      data
    }
  }
`

const RegSeminar = () => {

  const courseslists = useCourses();
  console.log(courseslists, 'courses names');

  const [nameVal, setNameValue] = useState('')
  const [mobileVal, setMobileValue] = useState('')
  const [emailVal, setEmailValue] = useState('')
  const [addressVal, setAddressValue] = useState('')
  const [courseVal, setCourseValue] = useState('')

  const [createSubmission, { loading, error, data }] = useMutation(SEMINAR_MUTATION);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Layout>
      <section id="admission" className='mt-5 pt-5 pb-5'>
          <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-12 m-auto">
                    <div class="section_heading mb-5">
                        <h2>জয়েন ফ্রি সেমিনার</h2>
                    </div>
                </div>
            </div>
          </div>
      </section>

    </Layout>
  )

}

export default RegSeminar;
