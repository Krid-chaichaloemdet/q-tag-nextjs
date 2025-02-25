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
      <div>

    <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
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
        <label>Password:</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <FormSuccess message={success} />
      <FormError message={error} />
      <button type="submit" className="w-full" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
      <hr />
    </form>
        <GoogleLoginButton />
    </div>

  );
};

export default LoginForm;
