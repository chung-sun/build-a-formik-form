import React from "react";
import './App.css';
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      alert('Login Successful');
      console.log('form: ', values);
    },
    validate: values => {
      let errors = {};

      if (!values.username) {
        errors.username = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'username should be an email';
      }

      if (!values.password) {
        errors.password = 'Field Required'
      } else if (values.password.length < 6) {
        errors.password = 'Should be 6 character minimum'
      }
      return errors;
    }

  });

  return (
    <div>
      <p>
        Sign Up Form
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>User Name</div>
        <input type="email" name="username" id="emailField" value={formik.values.username} onChange={formik.handleChange}/>
        {formik.errors.username ? <div id="emailError">{formik.errors.username}</div> : null }
        <div>Password</div>
        <input type="password" name="password" id="pswField" value={formik.values.password} onChange={formik.handleChange}/>
        {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
