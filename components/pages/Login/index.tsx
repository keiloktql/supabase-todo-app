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
import { LoginFormValues } from "./types";

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required field."),
    password: Yup.string().required("Required field.")
  });

  const onSubmitFn = ({ username, password }: LoginFormValues) => {
    console.log("submitted fn");
  };

  return (
    <MainLayout>
      <div className="w-full">
        <div className="mx-auto mt-36 flex h-full max-w-[360px] flex-col items-center">
          <Image src={LogoRaw} width={44} height={44} alt="logo" />
          <h1 className="text-display-sm font-semibold text-gray-900">
            Log in to your account
          </h1>
          <p className="text-gray-600">
            Welcome back! Please enter your details.
          </p>
          <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitFn}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-8 flex w-full flex-col">
                <FormField
                  fieldName="username"
                  fieldLabel="Username"
                  placeholder="Enter your username"
                  disabled={false}
                  className="w-full"
                />
                <div>
                  <FormField
                    fieldName="password"
                    fieldLabel="Password"
                    placeholder="Enter your password"
                    disabled={false}
                    className="mt-4 w-full"
                  />
                  <Link
                    className="mt-2 block text-primary-700"
                    href="/forgot-password"
                  >
                    Forgot password
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={!dirty || !isValid}
                  onClickFn={() => console.log("Clicked sign in btn")}
                  customClassName="mt-8"
                >
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
          <p className="mt-2 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link className="text-primary-700" href="/sign-up">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
export default Login;
