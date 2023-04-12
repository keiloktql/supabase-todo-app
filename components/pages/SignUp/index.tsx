/* eslint-disable no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import MainLayout from "@/components/layout/MainLayout";
import LogoRaw from "@/public/assets/svg/logo-raw.svg";
import Button from "@/components/shared/Button";
import FormField from "@/components/shared/FormField";
import { SignUpFormValues } from "./types";

const SignUpPage = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required field."),
    email: Yup.string().email("Invalid format.").required("Required field."),
    username: Yup.string().required("Required field."),
    password: Yup.string().required("Required field.")
  });

  const onSubmitFn = ({ username, password }: SignUpFormValues) => {
    console.log("submitted fn");
  };
  return (
    <MainLayout>
      <div className="w-full">
        <div className="mx-auto mt-36 flex h-full max-w-[360px] flex-col items-center">
          <Image src={LogoRaw} width={44} height={44} alt="logo" />
          <h1 className="text-display-sm font-semibold text-gray-900">
            Sign up for an account
          </h1>
          <p className="text-gray-600">
            Get started with improving your productivity.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              username: "",
              password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitFn}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-8 flex w-full flex-col">
                <FormField
                  fieldName="name"
                  fieldLabel="Name"
                  placeholder="Enter your name"
                  disabled={false}
                  className="w-full"
                />
                <FormField
                  fieldName="email"
                  fieldLabel="Email"
                  placeholder="Enter your email"
                  disabled={false}
                  className="mt-4 w-full"
                />
                <FormField
                  fieldName="username"
                  fieldLabel="Username"
                  placeholder="Enter your username"
                  disabled={false}
                  className="mt-4 w-full"
                />
                <FormField
                  fieldName="password"
                  fieldLabel="Password"
                  placeholder="Enter your password"
                  disabled={false}
                  className="mt-4 w-full"
                />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid}
                  onClickFn={() => console.log("Clicked sign up btn")}
                  customClassName="mt-8"
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link className="text-primary-700" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
