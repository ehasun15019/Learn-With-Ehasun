import { cards } from "@/assets/cardAssets";
import React from "react";
import CardDesign from "./CardDesign";

const CardSection = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center items-center">
      {cards.map((item) => (
        <CardDesign
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default CardSection;
