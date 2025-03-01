"use client";

import { googleAuthenticate } from "@/actions/google-login";
import Image from "next/image";
import { useActionState } from "react";

const GoogleLoginButton = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(
    googleAuthenticate,
    undefined
  );
  return (
    <form className="flex mt-4 bg-[#FF4357] rounded-3xl p-[0.5px]  w-[85%]" action={dispatchGoogle}>
      <button className="flex items-center gap-3 w-full text-white px-[0.5%] py-[3%]">
        <Image className="rounded-full absolute " alt="google login" src={"/auth/googleIcon.svg"} width={40} height={40} />
  
        <div className="flex justify-center w-[100%] font-bold"> Continue with Google</div>
      </button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
};
export default GoogleLoginButton;
