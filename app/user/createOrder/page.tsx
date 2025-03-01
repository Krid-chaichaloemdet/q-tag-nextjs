"use client";
import FinalPrice from "@/components/createOrder/finalPrice";
import Header from "@/components/createOrder/header";
import SelectDropdown from "@/components/createOrder/selectDropdown";
import TotalPrice from "@/components/createOrder/totalPrice";
import Image from "next/image";
import { useState } from "react";

const CreateOrderPage = () => {
  const [selectMaterial, setSelectMaterial] = useState("--");
  const [isOpenMaterial, setIsOpenMaterial] = useState(false);

  return (
    <div className="p-5 flex flex-col gap-2">
        <Header />
        <SelectDropdown />
        <div className="h-[0.3px] bg-opacity-20 bg-black"></div>
        <TotalPrice />
        <div className="h-[0.3px] bg-opacity-20 bg-black"></div>
        <FinalPrice />
    </div>
  );
};
export default CreateOrderPage;
