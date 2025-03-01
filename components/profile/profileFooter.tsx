"use client";
import Image from "next/image";
import MyOrderForm from "./myOrderForm";
import { useState } from "react";

interface cardArrayProps {
  icon: string;
  title: string;
}

const ProfileFooter = () => {
  const [selectIcon, setSelectIcon] = useState('default');
 
  const cardArray: cardArrayProps[] = [
    { icon: "/profile/cartprofilepage.svg", title: "My Order" },
    { icon: "/profile/location.svg", title: "Address" },
    { icon: "/profile/profileorderhistory.svg", title: "Order History" },
    { icon: "/profile/q&a.svg", title: "Q&A" },
  ];

  return (
    <div className="w-full h-[40%] rounded-lg">
      {selectIcon === 'default' && (
        <div className="grid grid-cols-2 gap-3 w-[100%] h-[100%]">
          {cardArray.map((data, index) => {
            return (
              <div
              onClick={()=>setSelectIcon(data.title)}
                className="w-[100%] border-2 rounded-xl h-[100%] flex flex-col gap-1 items-center justify-center"
                key={index}
              >
                <Image
                  width={30}
                  height={30}
                  alt="profile order icon"
                  src={data.icon}
                />
                <div>{data.title}</div>
              </div>
            );
          })}
        </div>
      )}
   {  selectIcon === 'My Order' && <MyOrderForm />}
    </div>
  );
};
export default ProfileFooter;
