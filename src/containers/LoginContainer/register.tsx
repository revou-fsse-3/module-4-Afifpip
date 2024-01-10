import { useState } from 'react';
import { Input } from '../../components';
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface RegisterFormValues {
  [key: string]: string;
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {

  const navigate = useNavigate();
  const [formData] = useState<RegisterFormValues>({
    fullName: '',
    email: '',
    password: '',
  });
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={formData}
          validationSchema={Yup.object().shape({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email address').required('Email Address is required'),
            password: Yup.string().required('Password is required').matches(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters and alphanumeric'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            if (Object.keys(values).some((key) => values[key] === '')) {
                setSubmitting(false);
            } else {
              try {
                  const requestOptions = {
                      method: 'POST',
                      body: JSON.stringify({
                          name: values.fullName,
                          email: values.email,
                          password: values.password,
                      }),
                      headers: {
                          'Content-Type': 'application/json',
                      },
                  };

                  const response = await fetch('https://mock-api.arikmpt.com/api/user/register', requestOptions);

                  if (response.ok) {
                      const responseData = await response.json();
                      console.log('Registration successful:', responseData);
                      navigate('/login');
                  } else {
                      const errorData = await response.json();
                      console.error('Registration failed:', errorData);
                  }
              } catch (error) {
                  console.error('Error:', error);
              }
            }
          }}
        >
          <Form className="space-y-6">

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                {/* <input id="name" name="name" type="name" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}
                <Field as={Input} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="fullName" name="fullName" placeholder="Fullname" />
                <ErrorMessage name="fullName" component="span" className="error text-xs text-red-600" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                {/* <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}
                <Field as={Input} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" id="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="span" className="error text-xs text-red-600" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                {/* <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/> */}
                <Field as={Input} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" id="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="span" className="error text-xs text-red-600" />
              </div>
              <div className="mt-4">
                <button  type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register