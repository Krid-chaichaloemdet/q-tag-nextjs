import Image from "next/image";
import { useRef } from "react";

interface dropdownData {
  title: string;
  option: string[];
  input: boolean;
  file: boolean;
}

const SelectDropdown = () => {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current?.click() ; 
    };

  const dropdownArray: dropdownData[] = [
    {
      title: "Quantity Type",
      option: ["Select", "Sheet", "Roll"],
      input: false,
      file: false,
    },
    {
      title: "Size",
      option: ["width", "length"],
      input: true,
      file: false,
    },
    {
      title: "Material",
      option: ["Select", "Material1", "Material2"],
      input: false,
      file: false,
    },
    {
      title: "Quantity",
      option: [],
      input: true,
      file: false,
    },
    {
      title: "Coated",
      option: ["Select", "Glossy", "Matte", "Uncoating"],
      input: false,
      file: false,
    },
    {
      title: "Delivery Method",
      option: ["Select", "Express", "Self Pickup"],
      input: false,
      file: false,
    },
    {
      title: "Upload file",
      file: true,
      option: [],
      input: true,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 ">
      {dropdownArray.map((data, index) => {
        return (
          <div className={`flex flex-col ${data.title === 'Upload file' ? 'col-span-2' : ''}`} key={index}>
            <label htmlFor="">{data.title}</label>

            {data.input === true ? (
              <div className={'col-start-1 col-end-2'} key={index}>
                {data.title === "Size" && (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      placeholder={data.option[0]}
                      className="w-full h-[2.5rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                    />
                    <div>X</div>
                    <input
                      type="text"
                      placeholder={data.option[1]}
                      className="w-full h-[2.5rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                    />
                    <div>cm</div>
                  </div>
                )}
                {data.title === "Quantity" && (
                  <input
                    className="w-full h-[2.5rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                    type="text"
                  />
                )}
                {data.title === "Upload file" && (
                  <div className="flex gap-10 ">
                    <button className="bg-[#FF4357]  py-1 px-5 text-white rounded-md" onClick={handleButtonClick}>Upload Now</button>
                    <input ref={fileInputRef} className="hidden" type="file" />
                    <div>
                      <div className="text-xs absolute -translate-y-5">**You can upload it later.</div>
                      <div className="flex gap-2 items-center">
                        <div>file name...</div>
                        <Image className="border-[1px] border-[#000000]  rounded-lg border-opacity-20" src={'/createOrder/deleteicon.svg'} width={35} height={35}  alt="delete file" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <select className="w-full h-[2.5rem] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden">
                {data.option.map((op, i) => (
                  <option key={i}>{op}</option>
                ))}
              </select>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default SelectDropdown;

{
  /* <div>Material</div>
            <div
            onClick={()=>setIsOpenMaterial(!isOpenMaterial)}
            className="border-[2px] rounded-md p-1 flex justify-between px-5">
              <div>{selectMaterial}</div>
              <Image width={15} height={15} alt="arrow dropdown" src={'/profile/arrowdown.svg'} />
            </div> */
}
{
  /* {isOpenMaterial    &&  <div className="sticky bg-white border-[1px] flex flex-col rounded-sm">
              <div 
                onClick={()=>{
                  setIsOpenMaterial(!isOpenMaterial)
                  setSelectMaterial('Material1')}}
                className="border-[0.5px] px-5">Material1</div>
              <div 
                   onClick={()=>{
                    setIsOpenMaterial(!isOpenMaterial)
                    setSelectMaterial('Material2')}}
              className="border-[0.5px] px-5">Material2</div>
            </div>} */
}
