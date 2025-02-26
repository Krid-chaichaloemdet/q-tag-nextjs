"use client";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerAction } from "@/actions/registerAction";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "./google-button";
import Link from "next/link";
import Image from "next/image";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  // Define the submit handler
  const onSubmit = (data: any) => {
    setLoading(true);
    registerAction(data).then((res) => {
      if (res.error) {
        setError(res.error);
        setLoading(false);
      }
      if (res.success) {
        setError("");
        setSuccess(res.success);
        setLoading(false);
        router.push("/user/profile");
      }
    });
  };

  return (
    <div className="bg-[#FF4357] h-screen flex flex-col items-center justify-center pt-[10%] ">
      <div className="bg-white rounded-md  w-[90%] h-[80%] relative  flex flex-col items-center">

      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href={"/"}>
            <Image
                 className="absolute right-1 pt-1 pl-1"
                 src="/close-circle.svg"
                 alt="Close icon"
                 width={30}
                 height={30}
                 />
                 </Link>
        <label
        className="font-bold text-[30px] w-full flex items-center justify-center pt-[5%]"
        htmlFor="">Register</label>
        <div>
          <label
          
          >Email:</label>
          <input
            placeholder="johndoe@email.com"
            type="email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Name:</label>
          <input placeholder="Please enter your name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input 
          placeholder='Password'
          type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
          placeholder='Confirm passwrod'
          type="password" {...register("passwordConfirmation")} />
          {errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <button
            type="submit"
            className="bg-[#FF4357] w-full rounded-3xl px-[0.5rem] py-[0.75rem] text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
          <div className="flex flex-col w-full justify-center items-center gap-[0.5rem]">
          <div className="flex flex-row gap-[0.5rem]">
            <p>Aready has an account? </p>
            <Link href={"/auth/login"}>Login</Link>
          </div>
          <div className="flex flex-row w-full justify-center items-center">
            <div className="w-full h-[0.2rem] bg-[#CCCCCC]"></div>
            <p className="mx-[1rem]">or</p>
            <div className="w-full h-[0.2rem] bg-[#CCCCCC]"></div>
          </div>
        </div>

      </form>
      <GoogleLoginButton />
      </div>
 
    </div>
  );
};

export default RegisterForm;
