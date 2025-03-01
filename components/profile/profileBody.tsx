import Image from "next/image";
import React from "react";

interface ProfileBodyProps {
  member: string;
  credit: number | null;
}

const ProfileBody = ({ member, credit }: ProfileBodyProps) => {
  return (
    <div className="bg-[#FF6272] text-white h-[25%] rounded-lg">
      <div className="p-5 flex justify-between">
        <div>MEMBER</div>
        <div>{member}</div>
      </div>
      <div className="p-5 flex">
        <div className="flex flex-col w-full">
          <div>Your Balance</div>
          <div className="flex justify-between w-[100%]">
            <div className="text-4xl">฿ {credit || 0}</div>
            <button className="bg-white text-[#FF6272] flex py-2 px-5 rounded-lg gap-3 items-center">
                <div className="text-2xl">+</div>
                <div>Top up</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
