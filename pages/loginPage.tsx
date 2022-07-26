import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import fabricImage from '../images/First.png'
import Image from "next/image";
interface Values {
  email: string
}

const initialValues = {
  email: "",
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

export default function LoginPage() {
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
          <h3 className="text-5xl font-bold font-serif ">Login/SignUp</h3>

          <br />
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Email or Phone"
            className="font-serif px-24 input-bordered border-2 input"
          />
          <br/>
          <ErrorMessage name="email" />

          <br />
          <button className="btn btn-link px-24 font-serif">
            Continue with google?
          </button>

          <br />
          <button
            type="submit"
            className="font-serif rounded-xl px-36 py-3 text-white bg-sky-500 transition hover:bg-blue-600 active:bg-sky-700"
          >
            Continue
          </button>
        </Form>
        </div>
        </div>
      </Formik>
    </div>
    </div>
  );
}
