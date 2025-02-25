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
    <div>
      <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Register</label>
        <div>
          <label>Email:</label>
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
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register("passwordConfirmation")} />
          {errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <GoogleLoginButton />
      <div>
        <div>Aleardy has an account?</div>
        <button>
          <Link href={"/auth/login"}>login</Link>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
