import React from "react";
import TabsDesign from "./TabsDesign";
import { ArticlesData } from "@/assets/articleAssets";

const TabsArticle = () => {
  return (
    <div className="py-6">
      <TabsDesign data={ArticlesData} />
    </div>
  );
};

export default TabsArticle;
