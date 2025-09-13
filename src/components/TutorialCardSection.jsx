import React from "react";
import TutorialCardDesign from "./TutorialCardDesign";
import { TutorialData } from "@/assets/assets";

const TutorialCardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {TutorialData.map((data) => (
        <TutorialCardDesign
          key={data.id}
          id={data.id}
          img={data.img}
          title={data.title}
          description={data.description}
          link={data.link}
        />
      ))}
    </div>
  );
};

export default TutorialCardSection;
