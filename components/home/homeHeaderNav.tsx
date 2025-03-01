'use client'
import Image from "next/image";
import Link from "next/link";
import HomeMobileNavbar from "./homeMobileNav";
import { useState } from "react";

const HomeHeaderNav = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);

  // text-[#FF4357]
  return (
    <div>
      <nav className="flex z-40 h-[56px] bg-[#000000] opacity-80 text-white justify-between items-center px-5 py-10">
        <Link href={"/"}>
        <Image alt="q-tag logo" height={100} width={100} src={"/home/logo.svg"} />
        </Link>
        <div className="flex gap-3 items-center">
          <Link href={"/user/profile"}>
            <Image
              alt="profile icon"
              className="text-white cursor-pointer"
              height={20}
              width={20}
              src={"/home/profile.svg"}
            />
          </Link>
          <Link href={"/user/order"}>
            <Image
              alt="cart icon"
              className=" cursor-pointer"
              height={20}
              width={20}
              src={"/home/cart.svg"}
            />
          </Link>
          <Image
          onClick={()=>setIsOpenMobileNav(!isOpenMobileNav)}
            alt="more icon"
            className=" cursor-pointer"
            height={20}
            width={20}
            src={"/home/more.svg"}
          />
        </div>
        {isOpenMobileNav && <HomeMobileNavbar setIsOpenMobileNav={setIsOpenMobileNav}/>}
      </nav>
    </div>
  );
};
export default HomeHeaderNav;
