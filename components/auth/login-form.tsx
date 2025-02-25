"use client";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginAction } from "@/actions/loginAction";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "./google-button";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setLoading(true);
    loginAction(data).then((res) => {
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
    <div className="bg-[#FF4357] h-screen flex items-start justify-center pt-[10%]">
      <div className="bg-white rounded-md  w-[90%] h-[80%] relative  flex flex-col items-center">
        <Image
          className="absolute right-1 pt-1 pl-1"
          src="/close-circle.svg"
          alt="Close icon"
          width={30}
          height={30}
        />

        <label
          className="font-bold text-[30px] w-full flex items-center justify-center pt-[5%]"
          htmlFor=""
        >
          Log in
        </label>
        <form className="p-10 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="lg:min-w-[26rem] px-[0.5rem] py-[0.75rem] border-[0.2rem] border-[#CACACA] rounded-[0.75rem] font-semibold text-[#818181]"
              placeholder="your e-mail"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              className="lg:min-w-[26rem] px-[0.5rem] py-[0.75rem] border-[0.2rem] border-[#CACACA] rounded-[0.75rem] font-semibold text-[#818181]"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <FormSuccess message={success} />
          <FormError message={error} />
          <button
            type="submit"
            className="bg-[#FF4357] w-full rounded-3xl px-[0.5rem] py-[0.75rem] text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <hr />
        </form>
        <div className="flex flex-col w-full justify-center items-center gap-[0.5rem]">
          <div className="flex flex-row gap-[0.5rem]">
            <p>Need an account? </p>
            <Link href={"/auth/register"}>Register</Link>
          </div>
          <div className="flex flex-row w-full justify-center items-center">
            <div className="w-full h-[0.2rem] bg-[#CCCCCC]"></div>
            <p className="mx-[1rem]">or</p>
            <div className="w-full h-[0.2rem] bg-[#CCCCCC]"></div>
          </div>
        </div>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginForm;
