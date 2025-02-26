import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen">
        <div className=" h-full w-screen overflow-y-scroll overflow-x-hidden">
          <div className="h-screen w-screen relative">
            <Image
              src={"/homebg.svg"}
              alt="BG"
              width={100}
              height={100}
              className="w-screen h-screen object-cover overflow"
            />

            <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,1)]"></div>

            <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0">
              <div className="text-center w-full flex flex-col justify-center items-center">
                <h1
                  className={`lg:text-[5rem] text-[#ffffff] font-bold text-[2.2rem] `}
                >
                  Create Your Design
                </h1>
                <p
                  className={`lg:text-[1.5rem] lg:leading-[3rem] lg:p-0 leading-[2rem] text-[#ffffff] text-[1.1rem] px-[2rem] mt-[1rem] max-w-[37rem] tracking-[0.1rem] font-light `}
                >
                  Make your design stickers, and labels. Express delivery as
                  fast as 2-4 business days. Create unique stickers with instant
                  proof.
                </p>
              </div>
              <div className={`lg:mt-[4rem] mt-[2rem]`}>
                <Link href="/createorder">
                  <button
                    className={`bg-[#FF4357] px-[2.5rem] py-[0.75rem] rounded-full`}
                  >
                    <p
                      className={`text-[#ffffff] font-semibold text-[1.25rem] tracking-[0.1rem]`}
                    >
                      Create Your Order
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-screen w-screen relative "></div>
        </div>
      </div>
    </div>
  );
}
