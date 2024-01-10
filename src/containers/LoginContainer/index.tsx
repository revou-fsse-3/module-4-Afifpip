// import { useContext } from 'react';
// import { User, AppContext } from '../../providers/Provider';

import { useState } from 'react';
import { Input } from '../../components';
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// interface DataProps {   
//   email: string;
//   password: string;
// }

interface LoginFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const LoginContainer = () => {
  
  

  // const handleInsertToken = () => {
  //   localStorage.setItem('token', 'ini token :(')
  // }

  // const { setUser } = useContext(AppContext)

  // const fetchUser = async () => {
  //   const response = await fetch('');
  //   const data: User = await response.json()
    
  //   setUser?.(data)
  // }

  const navigate = useNavigate();
  const [formData] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  return (
  
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={formData}
          validationSchema={Yup.object().shape({            
            email: Yup.string().email('Invalid email address').required('Email Address is required'),
            password: Yup.string().required('Password is required'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            if (Object.keys(values).some((key) => values[key] === '')) {
                setSubmitting(false);
            } else {
              try {
                  const requestOptions = {
                      method: 'POST',
                      body: JSON.stringify({
                          email: values.email,
                          password: values.password,
                      }),
                      headers: {
                          'Content-Type': 'application/json',
                      },
                  };

                  const response = await fetch('https://mock-api.arikmpt.com/api/user/login', requestOptions);

                  if (response.ok) {
                      const responseData = await response.json();
                      console.log('Login successful:', responseData);
                      window.localStorage.setItem('token', responseData.data.token)
                      navigate('/category');
                  } else {
                      const errorData = await response.json();
                      console.error('Login failed:', errorData);
                  }
              } catch (error) {
                  console.error('Error:', error);
              }
            }
          }}
        >
          <Form className="space-y-6">           
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                
                <Field as={Input} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" id="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="span" className="error text-xs text-red-600" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                
                <Field as={Input} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" id="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="span" className="error text-xs text-red-600" />
              </div>
              <div className="mt-4">
                <button  type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
              </div>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a onClick={() => navigate('/register')} href="" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign Up</a>
        </p>
      </div>
    </div>

  )
}

export default LoginContainer