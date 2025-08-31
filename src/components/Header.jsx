import React from "react";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center header py-6 px-4">
      <h1 className="sm:text-2xl md:text-5xl">
        <span className={permanentMarker.className}>LEARN WITH EHASUN</span>
      </h1>

      <p className="text-[1.2rem] pt-3 text-gray-400 text-center">
        You are starting a long <span className="text-[#24cfa6]">journey </span>
        with programming.
      </p>

      <p className="w-[180px] text-[0.8rem] relative right-[-387px] positional_paragraph">
        তোমরা প্রতিনিয়ত{" "}
        <span className="text-[#24cfa6]">Programing Related</span> কিছু না কিছু
        শিখতে চলেছ
      </p>

      <button className="btn btn-success px-10 rounded-lg py-6 text-[1.3rem]">
        Check Out The Website
      </button>

      <div className="w-[380px] mt-3">
        <marquee behavior="" direction="">
          বাংলা ভাষায় প্রগ্রামিং শিখুন খুব সহজেই। প্রগ্রামিং সম্পর্কিত নোটগুলা
          পেতে আমার site টা প্রতিনিয়ত visit করুন
        </marquee>
      </div>
    </div>
  );
};

export default Header;
