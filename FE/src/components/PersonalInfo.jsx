import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { cardContext } from "../context/context";

const PersonalInfo = () => {
  const value = useContext(cardContext);
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("Current Step-",value.steps)
    value.setsteps((prev) => prev + 1);
    console.log("Next Step-",value.steps);
  };
  return (
    <>
      <div className={value.steps===1?"p-[3rem] w-[565px] h-[565px] m-[1rem] rounded-2xl":"hidden"}>
        <div>
          <p className="ubuntu-bold text-3xl text-[#02295a]">Personal info</p>
          <p className="ubuntu-regular text-[#9699ab]">
            Please provide you name,email address, and phone number.
          </p>
        </div>

        <form
          className="ubuntu-medium flex flex-col my-[2rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Input for Full name */}
          <div className="flex justify-between">
            <label htmlFor="fullname" className="text-[#02295a]">
              Name
            </label>
            {errors.fullname && (
              <div
                className={
                  errors.fullname.message === undefined
                    ? "hidden"
                    : "text-[#ed3548]"
                }
              >
                {errors.fullname.message}
              </div>
            )}
          </div>
          <input
            className={
              errors.fullname
                ? "px-[10px] border-[1px] border-[#ed3548] outline-none h-[45px] rounded-lg mb-[1.5rem] cursor-pointer"
                : "px-[10px] border-[1px] border-[#d6d9e6] hover:border-[#9699ab] outline-none h-[45px] rounded-lg mb-[1.5rem] cursor-pointer"
            }
            type="text"
            placeholder="e.g. Stephen King"
            {...register("fullname", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 2, message: "Min length two" },
            })}
            onKeyUp={() => {
              trigger("fullname");
            }}
          />

          {/* Input for email */}
          <div className="flex justify-between">
            <label htmlFor="fullname" className="text-[#02295a]">
              Email
            </label>
            {errors.email && (
              <div className="text-[#ed3548]">{errors.email.message}</div>
            )}
          </div>
          <input
            className={
              errors.email
                ? "border-[1px] border-[#ed3548] outline-none h-[45px] rounded-lg mb-[1.5rem] p-[10px] cursor-pointer"
                : "border-[1px] border-[#d6d9e6] hover:border-[#9699ab] outline-none h-[45px] rounded-lg mb-[1.5rem] p-[10px] cursor-pointer"
            }
            type="emai"
            id="emailaddress"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: "Please enter valid email",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />

          {/* Input for phone */}
          <div className="flex justify-between">
            <label htmlFor="fullname" className="text-[#02295a]">
              Phone
            </label>
            {errors.phone && (
              <div className="text-[#ed3548]">{errors.phone.message}</div>
            )}
          </div>
          <input
            className={
              errors.phone
                ? "border-[1px] border-[#ed3548] outline-none h-[45px] rounded-lg mb-[1.5rem]  p-[10px] cursor-pointer"
                : "border-[1px] border-[#d6d9e6] hover:border-[#9699ab] outline-none h-[45px] rounded-lg mb-[1.5rem]  p-[10px] cursor-pointer"
            }
            type="tel"
            id="phonenumber"
            placeholder="e.g. +91 99999999"
            {...register("phone", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 10, message: "Incorrect Phone number" },
              maxLength: { value: 10, message: "Incorrect Phone number" },
            })}
            onKeyUp={() => {
              trigger("phone");
            }}
          />

          <div className="flex justify-end">
            <input
              className="ubuntu-regular w-[100px] bg-[#02295a] hover:bg-[#473dff] text-white p-[0.5rem] rounded-lg border-none my-[4rem] cursor-pointer"
              type="submit"
              value="Next Step"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
