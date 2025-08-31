import React from "react";

import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const ArticleHeading = () => {
  return (
    <div className="my-6 flex justify-center items-center">
      <h1 className="sm:text-4xl md:text-5xl">
        <span className={permanentMarker.className}>
          Here have All Articles
        </span>
      </h1>
    </div>
  );
};

export default ArticleHeading;
