import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import fabricImage from '../images/First.png'

interface Values {
  email: string,
  otp: string
}

const initialValues = {
  email: "",
  otp: "",
};

const onSubmit = (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
});

export default function LoginUsingOtp() {
  return (
    <div className="max-h-screen">
      <div className="grid grid-cols-2">
        <div className="col-span-1 lg:inline hidden">
          <Image
            src={fabricImage}
            layout="responsive"
            className="max-h-screen"
          />
        </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="lg:col-span-1 col-span-2 sm:flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
        <Form>
          <h3 className="text-5xl font-bold font-serif">Login using OTP</h3>

          <br />
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Email or Phone"
            className="font-serif appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          <ErrorMessage name="email" />    
          
          <Field
            type="string"
            id="otp"
            name="otp"
            placeholder="OTP"
            className="font-serif appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          <br/>
          <ErrorMessage name="otp" />

          <br />
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
        </Form>
        </div>
        </div>
      </Formik>
      </div>
    </div>
  );
}