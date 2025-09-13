import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TutorialCardDesign = ({ img, title, description, link }) => {
  const isDisabled = !link;

  return (
    <div className="card shadow-lg w-[230px] border border-gray-500 rounded-2xl flex items-center justify-center py-3 ">
      <div className="image-sec">
        <Image src={img} alt={title} className="rounded-full w-[40px]" />
      </div>

      <div className="card-body text-center flex justify-center items-center">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-gray-400">{description}</p>

        {isDisabled ? (
          <button
            disabled
            className="border border-gray-400 text-gray-400 cursor-not-allowed w-[115px] rounded-full py-1 text-[0.8rem] flex items-center justify-center gap-2"
          >
            <SquareArrowOutUpRight width={15} />
            ভিডিও দেখুন
          </button>
        ) : (
          <a
            href={link}
            className="border border-accent w-[121px] rounded-full py-1 text-[0.8rem] flex items-center justify-center gap-2 font-semibold hover:bg-accent hover:text-black transition"
            target="_blank"
          >
            <SquareArrowOutUpRight width={15} />
            ভিডিও দেখুন
          </a>
        )}
      </div>
    </div>
  );
};

export default TutorialCardDesign;
