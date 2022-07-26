import * as React from "react";
import { useFormik } from "formik";
import Image from "next/image";
import fabricImage from "../images/First.png";

//import PhoneInputWithCountrySelect using "npm install react-phone-input-2 --save";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


interface Values {
  name: string; 
  email: string;
  phone: string;
  password: string;
}

export default function Signup() {
  const [value, setValue] = React.useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const onChangeValue = (e: any) => {
    console.log(e);
    setValue(e);
    formik.setFieldValue("phone", e);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-2">
          <div
            className="col-span-1 lg:inline hidden"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image src={fabricImage} layout="intrinsic" />
          </div>

          <div>
            <div className="lg:col-span-1 col-span-2 sm:flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <h2 className="font-serif mt-6 text-center text-5xl font-bold text-gray-900">
                    Sign up
                  </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="font-serif appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Your Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>
                    <div>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        className="font-serif appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div>
                      <PhoneInput
                        country={"in"}
                        placeholder="Enter phone number"
                        value={value}
                        onChange={(e) => onChangeValue(e)}
                      />
                    </div>
                    <div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="font-serif appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center"></div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className=" font-serif group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}