"use client";

import { googleAuthenticate } from "@/actions/google-login";
import Image from "next/image";
import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";

const GoogleLoginButton = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  );
  return (
    <form className="flex mt-4 bg-[#FF4357] rounded-3xl p-[0.5px] pr-2" action={dispatchGoogle}>
      <button className="flex flex-row items-center gap-3 w-full">
        <Image alt="google login" src={"/googleIcon.svg"} width={40} height={40} />
        Continue with Google
      </button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
};
export default GoogleLoginButton;
