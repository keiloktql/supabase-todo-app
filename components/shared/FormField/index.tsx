/* eslint-disable no-unused-vars */
import { ErrorMessage, Field } from "formik";
import React from "react";
import { FORM_FIELD_ENUM } from "@/config/constants";
import { FormFieldProps } from "./types";

const Input = (props: any) => <Field {...props} />;
const TextArea = (props: any) => <Field as="textarea" {...props} />;

const FormField = (props: FormFieldProps) => {
  const {
    fieldName,
    fieldLabel,
    fieldDesc,
    placeholder,
    options,
    wordCount,
    prefix,
    as = FORM_FIELD_ENUM.INPUT,
    type,
    disabled,
    className = ""
  } = props;

  let formFieldElement;

  switch (as) {
    case FORM_FIELD_ENUM.TEXTAREA:
      formFieldElement = (
        <TextArea
          disabled={disabled}
          autoComplete="off"
          name={fieldName}
          placeholder={placeholder}
        />
      );
      break;
    default:
      formFieldElement = (
        <Input
          disabled={disabled}
          autoComplete="off"
          name={fieldName}
          type={type}
          placeholder={placeholder}
          className="w-full rounded border border-solid border-gray-300 bg-white px-4 py-2.5 transition placeholder:text-gray-500 focus:outline-none focus:ring focus:ring-primary-300 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50"
        />
      );
  }

  return (
    <div className={`w-full ${className}`}>
      <label className="font-semibold" htmlFor={fieldName}>
        {fieldLabel}
      </label>
      {formFieldElement}
      <ErrorMessage
        component="span"
        className="my-1 block text-sm font-semibold text-error"
        name={fieldName}
      />
    </div>
  );
};

export default FormField;
