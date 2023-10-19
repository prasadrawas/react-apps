import React from "react";
import { FormInput } from "../../../components/form";
import { useForm } from "react-hook-form";
import {
  emailRegex,
  fullNameRegex,
  phoneRegex,
} from "../../../utils/regex-constants";

import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProfilePictureInput from "./ProfilePictureInput";

function SignUpForm({ className, onLoginPressed }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   submit form function
  const submitForm = (data) => {
    event.preventDefault();
    console.log("Form submitted with data:", data);
  };

  return (
    <section
      className={`flex items-center justify-center md:h-screen px-16 ${className}`}
      data-aos="fade-left"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <form
        action=""
        onSubmit={handleSubmit(submitForm)} // Pass the reference to submitForm
        className="w-full md:w-[400px] flex flex-col items-center justify-center"
      >
        {/* <img src={imgLogo} alt="" className="h-10 mb-6" /> */}

        <h1 className="text-3xl font-medium mb-2">
          Welcome to{" "}
          <span className="text-blue-500 font-semibold">ShopCart</span>
        </h1>
        <p className="text-xs font-light mb-10">
          Please fill the sign up form to continue
        </p>

        {/* form fields */}


        <ProfilePictureInput onImageUpdate={(image)=> {}} />

        <FormInput
          Icon={FaUserAlt}
          name={"name"}
          register={register}
          error={errors.name?.message}
          pattern={fullNameRegex}
          placeholder="Enter your full name"
          type="text"
        />

        <FormInput
          Icon={MdEmail}
          name={"email"}
          register={register}
          error={errors.email?.message}
          pattern={emailRegex}
          placeholder="Enter your email address"
          type="email"
        />

        <FormInput
          Icon={FaPhoneAlt}
          name={"phone"}
          register={register}
          error={errors.phone?.message}
          pattern={phoneRegex}
          placeholder="Enter your phone number"
          type="tel"
        />

        <FormInput
          Icon={FaLock}
          name={"password"}
          register={register}
          error={errors.password?.message}
          placeholder="Enter your password"
          type="password"
          isPasswords={true}
        />

        {/* form submit button */}
        <button
          type="submit"
          className="w-full mt-8 rounded-lg bg-blue-500 p-3 text-white border-[1px] hover:bg-white hover:text-slate-800 transition-all duration-300 ease-out"
        >
          Register
        </button>

        {/* sign up section  */}
        <p className="text-sm text-slate-800 my-10">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={onLoginPressed && onLoginPressed}
          >
            Login here
          </span>
        </p>
      </form>
    </section>
  );
}

export default SignUpForm;
