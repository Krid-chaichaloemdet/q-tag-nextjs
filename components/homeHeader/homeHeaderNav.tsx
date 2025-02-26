'use client'
import Image from "next/image";
import Link from "next/link";
import HomeMobileNavbar from "./homeMobileNav";
import { useState } from "react";

const HomeHeaderNav = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState<boolean>(false);


  return (
    <div>
      <nav className="flex h-[56px] bg-black text-white justify-between items-center px-5 py-10">
        <Link href={"/"}>
        <Image alt="q-tag logo" height={100} width={100} src={"/logo.svg"} />
        </Link>
        <div className="flex gap-3 items-center">
          <Link href={"/user/profile"}>
            <Image
              alt="profile icon"
              className="invert cursor-pointer"
              height={20}
              width={20}
              src={"/profile.svg"}
            />
          </Link>
          <Link href={"/user/order"}>
            <Image
              alt="cart icon"
              className=" cursor-pointer"
              height={20}
              width={20}
              src={"/cart.svg"}
            />
          </Link>
          <Image
          onClick={()=>setIsOpenMobileNav(!isOpenMobileNav)}
            alt="more icon"
            className=" cursor-pointer"
            height={20}
            width={20}
            src={"/more.svg"}
          />
        </div>
        {isOpenMobileNav && <HomeMobileNavbar setIsOpenMobileNav={setIsOpenMobileNav}/>}
      </nav>
    </div>
  );
};
export default HomeHeaderNav;
