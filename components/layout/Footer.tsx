/* eslint-disable no-unused-vars */
import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Logo from "@/public/assets/svg/logo.svg";
import FlagIcons from "@/public/assets/svg/flag-icons.svg";
import Image from "next/image";
import {
  FOOTER_NAV_HEADER_ENUM,
  FOOTER_NAV_LINKS_META
} from "@/config/constants";
import Link from "next/link";
import Button from "../shared/Button";
import {
  FooterNavLinkKeys,
  FooterNavLinksValues,
  NewsLetterFormValues
} from "./types";
import FormField from "../shared/FormField";

const FooterNavLinks = ({ variation }: FooterNavLinksValues) => {
  const { heading, links } = FOOTER_NAV_LINKS_META[variation];
  return (
    <div>
      <h1 className="mb-4 text-sm font-semibold text-gray-500">{heading}</h1>
      <span className="flex flex-col">
        {links.map(({ href, text }: FooterNavLinkKeys, key) => (
          <Link
            key={key}
            className="my-1 font-semibold text-gray-600 first-of-type:mt-0 last-of-type:mb-0 hover:underline"
            href={href}
          >
            {text}
          </Link>
        ))}
      </span>
    </div>
  );
};

const Footer = () => {
  const validationSchema = Yup.object().shape({
    newsletterEmail: Yup.string()
      .email("Invalid format.")
      .required("Required field.")
  });

  const onSubmitFn = ({ newsletterEmail }: NewsLetterFormValues) => {
    console.log("submitted fn");
  };

  return (
    <footer>
      <div className="flex max-w-screen-xl flex-col">
        {/* Newsletter section */}
        <section className="flex w-full justify-between bg-gray-50 px-16 py-12">
          <div className="mr-2 flex w-full flex-col">
            <h2 className="text-xl font-semibold text-gray-900">
              Join our newsletter
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest happenings from Layers.
            </p>
          </div>
          <div className="ml-2 w-full">
            <Formik
              initialValues={{
                newsletterEmail: ""
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmitFn}
            >
              {({ isValid, dirty }) => (
                <Form className="flex">
                  <FormField
                    fieldName="newsletterEmail"
                    placeholder="Enter your email"
                    disabled={false}
                    className="mr-2"
                  />
                  <Button
                    type="submit"
                    disabled={!dirty || !isValid}
                    onClickFn={() => console.log("Clicked subscribe btn")}
                    customClassName="ml-2"
                  >
                    Subscribe
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
        {/* Main footer section */}
        <section>
          {/* Top */}
          <div className="flex justify-between px-16 py-12">
            <div>
              <Image src={Logo} width={146} height={48} alt="Logo" />
              <p className="mt-2 text-gray-600">
                Plan, Organise and Get your work done.
              </p>
              <span className="mt-4 flex items-center">
                <Image
                  className="singapore-flag mr-1 object-none"
                  src={FlagIcons}
                  width={21}
                  height={15}
                  alt="Flag"
                />
                <p className="ml-1 text-sm font-medium text-gray-500">
                  Singapore
                </p>
              </span>
            </div>
            <FooterNavLinks variation={FOOTER_NAV_HEADER_ENUM.PRODUCT} />
            <FooterNavLinks variation={FOOTER_NAV_HEADER_ENUM.COMPANY} />
            <FooterNavLinks variation={FOOTER_NAV_HEADER_ENUM.RESOURCES} />
            <FooterNavLinks variation={FOOTER_NAV_HEADER_ENUM.LEGAL} />
          </div>
          <hr className="mx-16 flex" />
          {/* Bottom */}
          <div className="flex justify-between px-16 py-4">
            <p className="text-gray-500">
              Copyright &copy; 2023 Layers Pte Ltd. All rights reserved.
            </p>
            {/* Socials */}
            <div></div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
