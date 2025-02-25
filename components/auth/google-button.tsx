"use client";

import { googleAuthenticate } from "@/actions/google-login";
import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";

const GoogleLoginButton = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  );
  return (
    <form className="flex mt-4" action={dispatchGoogle}>
      <button className="flex flex-row items-center gap-3 w-full">
        <BsGoogle />
        Google Sign In
      </button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
};
export default GoogleLoginButton;
