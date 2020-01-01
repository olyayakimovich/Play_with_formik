import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

// ========================================

ReactDOM.render(<SignupForm />, document.getElementById('root'));

// <input className="form-input" placeHolder="Jane"  />
{
  /* <Field name="firstName" className="form-input" placeholder="Jane" /> */
}

// <textarea className="form-textarea"/></textarea>
{
  /* <Field name="message" as="textarea"  className="form-input"/> */
}

// <select className="my-select"/>
{
  /* <Field name="colors" as="select" className="my-select">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</Field> */
}

// with styled-components/emotion
// const MyStyledInput = styled.input`
//   padding: .5em;
//   border: 1px solid #eee;
//   /* ... */
// `
// const MyStyledTextarea = MyStyledInput.withComponent('textarea');

// <input className="czx_123" placeHolder="google.com"  />
{
  /* <Field name="website" as={MyStyledInput} placeHolder="google.com"/> */
}

// <textarea  placeHolder="Post a message..." rows={5}></textarea>
{
  /* <Field name="message" as={MyStyledTextArea} placeHolder="Post a message.." rows={4}/> */
}
