import React from "react";
import TutorialCardSection from "./TutorialCardSection";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Tutorial = () => {
  return (
    <div className="">
      <div className="py-10 container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="tutorial-subject-section">
            <TutorialCardSection />
          </div>

          <div className="image-section text-right">
            <Image
              src={assets.tutorial.vector}
              alt="vector art"
              className="w-[250px] md:w-[300px] lg:w-[320px] mx-auto"
            />

            <div className="content text-center md:text-right">
              <h3 className="pt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                অসাধারণ <span className="text-accent"> টিউটরিয়াল</span>
              </h3>

              <p className="pt-2 text-sm sm:text-base md:text-lg lg:text-lg max-w-[400px] mx-auto px-4 md:px-0">
                আমার সাথে আপনারা শিখতে পারবেন Programming related অনেক কিছু।
                Programming এর যাত্রা শুরু হোক
                <span className="text-accent"> Learn With Ehasun</span> এর সাথে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
