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
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import { LoginFormValues } from "./types";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid format.").required("Required field."),
    password: Yup.string().required("Required field.")
  });
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [smh, setSmh] = useState(false); // flag to trigger form shaking animation
  const { auth, setAuth } = useAuth();
  const user = useUser();

  const onSubmitFn = async ({ email, password }: LoginFormValues) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setSmh(true);
      toast.error("An error has occured.");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
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
            Log in to your account
          </h1>
          <p className="text-gray-600">
            Welcome back! Please enter your details.
          </p>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitFn}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-8 flex w-full flex-col">
                <FormField
                  fieldName="email"
                  fieldLabel="Email"
                  placeholder="Enter your email"
                  disabled={loading}
                  className="w-full"
                />
                <div>
                  <FormField
                    fieldName="password"
                    fieldLabel="Password"
                    placeholder="Enter your password"
                    disabled={loading}
                    className="mt-4 w-full"
                    type="password"
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
                  loading={loading}
                  disabled={!dirty || !isValid || loading}
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
