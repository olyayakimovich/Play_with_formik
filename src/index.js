import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" {...getFieldProps('firstName')} />
      {touched.firstName && errors.firstName ? (
        <div>{errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" {...getFieldProps('lastName')} />
      {touched.lastName && errors.lastName ? (
        <div>{errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input name="email" {...getFieldProps('email')} />
      {touched.email && errors.email ? <div>{errors.email}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

// ========================================

ReactDOM.render(<SignupForm />, document.getElementById('root'));
