import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface HomeMobileNavbarProps {
  setIsOpenMobileNav: Dispatch<SetStateAction<boolean>>;
}

interface MobileNav {
  title: string;
  path: string;
}
const HomeMobileNavbar: React.FC<HomeMobileNavbarProps> = ({
  setIsOpenMobileNav,
}) => {
  const mobileNavberArray: MobileNav[] = [
    { title: "Materials", path: "/public/materials" },
    { title: "About us", path: "/public/aboutUs" },
    { title: "Contact", path: "/public/contact" },
  ];

  return (
    <div className="w-[50%]  h-[100%] flex flex-col px-5 gap-5 pt-[10%] z-10 bg-[#121318] absolute right-0 top-[11%]">
      {mobileNavberArray.map((data, index) => {
        return (
          <div key={index} className="flex flex-col gap-5">
            <Link onClick={() => setIsOpenMobileNav(false)} href={data.path}>
              {data.title}
            </Link>
            <hr />
          </div>
        );
      })}
      <div>
            <div>Language</div>
            <div>
                <div className="flex gap-2">
                    <Image alt="thailand flag" src={'/thaiflag.svg'} width={20} height={20}/>
                    <p>TH</p>
                </div>
                <div className="flex gap-2">
                    <Image alt="thailand flag" src={'/englishflag.svg'} width={20} height={20}/>
                    <p>EN</p>
                </div>
            </div>
        </div>
    </div>
  );
};
export default HomeMobileNavbar;
