import logo from "./logo.png";

// Tutorial folder's image uploaded
import vector from "./tutorial/vector.png";
import js from "./tutorial/js.png";
import react from "./tutorial/react.png";
import nextjs from "./tutorial/nextjs.png";
import shorts from "./tutorial/shorts.svg";

export const assets = {
  logo,

  // Tutorial folder's image exported
  tutorial: {
    vector,
    js,
    react,
    nextjs,
    shorts,
  },
};

/* Tutorial data implement started */
export const TutorialData = [
  {
    id: 1,
    img: assets.tutorial.js,
    title: "JavaScript",
    description: "basic to advanced JS question solve",
    link: "https://www.youtube.com/watch?v=qRDCP21Gp-E&list=PLgSxm0rJuHxMlD5XYoEM5J7lyEEAIxzGE&index=5",
  },
  {
    id: 2,
    img: assets.tutorial.react,
    title: "React.js",
    description: "Coming soon",
    link: "",
  },
  {
    id: 3,
    img: assets.tutorial.nextjs,
    title: "Next.js",
    description: "Coming soon",
    link: "",
  },
  {
    id: 4,
    img: assets.tutorial.shorts,
    title: "Youtube Shorts",
    description: "Problem Solve করা আছে",
    link: "https://www.youtube.com/@ehasunulislam/shorts",
  },
];
/* Tutorial data implement end */
