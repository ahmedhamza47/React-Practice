import React from "react";
import styled from "styled-components";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const signUpValidation = yup.object().shape({
  name: yup.string().min(2).max(25).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

function FormValidation() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      // formik ley object return garcha and tyo object lai destrucutre garera hamlai
      //chainey key-value pair like handleChange haru lai withdraw gareko

      initialValues: initialValues, // mathi ko initial values pass gareko

      validationSchema: signUpValidation,
      onSubmit: (values, a) => {
        //  console.log(values);
        // console.log(a);
        console.log("submitted");
        a.resetForm();
      },
    });
  // console.log(handleChange);

  return (
    <>
      <div className="container justify-content-center text-center mt-3">
        <div className="title">
          <h1>Form</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br /> <br />
          {errors.name && touched.name ? (
            <p className="text-danger "> {errors.name}</p>
          ) : null}
          <Input
            type="email"
            name="email"
            placeholder="enter email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-danger "> {errors.email}</p>
          ) : null}
          <br />
          <br />
          <Input
            type="passoword"
            name="password"
            placeholder="enter password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="text-danger "> {errors.password}</p>
          ) : null}
          <br />
          <br />
          <Input
            type="passoword"
            name="confirmPassword"
            placeholder="enter password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="text-danger "> {errors.confirmPassword}</p>
          ) : null}
          <br /> <br />
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
const Input = styled.input`
  width: 10cm;
`;
export default FormValidation;
