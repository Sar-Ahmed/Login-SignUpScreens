import * as React from "react";
import Image from "next/image";
import fabricImage from '../images/First.png'
import { Field, Form, Formik } from "formik"
import { Link } from "@tanstack/react-location"

function validateEmail(value:any) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

export default function SignIn() {
  return (
    
    <div className="max-h-screen">
      <div className="grid grid-cols-2">
        <div 
        className="col-span-1 lg:inline hidden" 
        style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={fabricImage}
            layout="intrinsic"
          />
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <div className="lg:col-span-1 col-span-2 sm:flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <h2 className="text-5xl font-bold font-serif">
                    Sign in 
                  </h2>
                </div>

                <Form className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <Field
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        className="font-serif appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        validate={validateEmail}
                      />
                      {errors.email && touched.email && (
                        <div className="font-serif tooltip tooltip-top">{errors.email}</div>
                      )}
                    </div>
                    <div>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        required
                        className=" font-serif appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center"></div>

                        
                    <div className="text-sm">
                      <Link 
                      to="/loginUsingOtp"
                      className="font-serif font-medium text-indigo-600 hover:text-indigo-500 btn-link ">
                        LOGIN USING OTP?{" "}
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="font-serif group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className=" font-serif h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Sign in
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
    
  );
}