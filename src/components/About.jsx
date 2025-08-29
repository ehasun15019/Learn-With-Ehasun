import { Schibsted_Grotesk } from "next/font/google";
import React from "react";

const Grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div className="pt-18 px-5">
      <h2 className="text-white sm:text-4xl md:text-5xl text-center">
        <span className={Grotesk.className}>
          You can learn something <br />{" "}
          <span className="text-[#24cfa6]">new every week</span>.
        </span>
      </h2>

      <div className="video-section flex justify-center items-center mt-10">
        {/* Responsive video wrapper */}
        <div className="relative w-full max-w-3xl  aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/9FJL24-26kE"
            title="How to create bulb on off switch with JavaScript"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
