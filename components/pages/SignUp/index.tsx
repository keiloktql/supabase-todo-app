/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import MainLayout from "@/components/layout/MainLayout";
import LogoRaw from "@/public/assets/svg/logo-raw.svg";
import Button from "@/components/shared/Button";
import FormField from "@/components/shared/FormField";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";
import { SignUpFormValues } from "./types";

const SignUpPage = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required field."),
    lastName: Yup.string().required("Required field."),
    email: Yup.string().email("Invalid format.").required("Required field."),
    username: Yup.string().required("Required field."),
    password: Yup.string()
      .required("Required field.")
      .min(8, "Minimum 8 characters.")
  });
  const [loading, setLoading] = useState(false);
  const [smh, setSmh] = useState(false); // flag to trigger form shaking animation
  const [showSuccess, setShowSuccess] = useState(false);
  const supabaseClient = useSupabaseClient();

  const onSubmitFn = async (
    { firstName, lastName, email, username, password }: SignUpFormValues,
    resetForm: any
  ) => {
    setLoading(true);
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          username
        }
      }
    });
    console.log(data);
    console.log(error);
    if (error) {
      setSmh(true);
      toast.error("An error has occured.");
      setLoading(false);
    } else {
      setShowSuccess(true);
      resetForm();
      setLoading(false);
      toast.success("Confirm your email via your inbox!", {
        autoClose: false
      });
    }
  };
  return (
    <MainLayout>
      <div className="smh-container w-full">
        <div
          className={`smh-card${
            smh ? "--animate" : ""
          } mx-auto my-36 flex h-full max-w-[360px] flex-col items-center`}
          onAnimationEnd={() => setSmh(false)}
        >
          <Image src={LogoRaw} width={44} height={44} alt="logo" />
          <h1 className="text-display-sm font-semibold text-gray-900">
            Sign up for an account
          </h1>
          <p className="text-gray-600">
            Get started with improving your productivity.
          </p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmitFn(values, resetForm);
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-8 flex w-full flex-col">
                <FormField
                  fieldName="firstName"
                  fieldLabel="First Name"
                  placeholder="Enter your first name"
                  disabled={loading}
                  className="w-full"
                />
                <FormField
                  fieldName="lastName"
                  fieldLabel="Last Name"
                  placeholder="Enter your last name"
                  disabled={loading}
                  className="mt-4 w-full"
                />
                <FormField
                  fieldName="email"
                  fieldLabel="Email"
                  placeholder="Enter your email"
                  disabled={loading}
                  className="mt-4 w-full"
                />
                <FormField
                  fieldName="username"
                  fieldLabel="Username"
                  placeholder="Enter your username"
                  disabled={loading}
                  className="mt-4 w-full"
                />
                <FormField
                  fieldName="password"
                  fieldLabel="Password"
                  placeholder="Enter your password"
                  disabled={loading}
                  className="mt-4 w-full"
                  type="password"
                />
                <Button
                  type="submit"
                  loading={loading}
                  disabled={!dirty || !isValid || loading}
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
          <p
            className={`${
              showSuccess ? "block" : "hidden"
            } mt-2 text-sm font-semibold text-success-500`}
          >
            Confirm your email via your inbox.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
