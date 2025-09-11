import temperatureReact from "./videos/temperature-react.png";
import propsHandlingNext from "./videos/propsHandlingNext.png";
import FullScreenToggle from "./videos/FullScreenToggle.png";

export const youtubeAssets = {
  videos: {
    temperatureReact,
    propsHandlingNext,
    FullScreenToggle,
  },
};

export const cards = [
  {
    id: 1,
    img: youtubeAssets.videos.temperatureReact,
    title: "Temperature Converter React App",
    description:
      "A simple temperature converter app built with React that allows users to convert temperatures between Celsius and Fahrenheit",
    link: "https://www.youtube.com/watch?v=otD6QDSUd6g&t=5s",
  },
  {
    id: 2,
    img: youtubeAssets.videos.propsHandlingNext,
    title: "Props Handling in Next.js",
    description:
      "Learn how to handle props in Next.js, including passing data between components and using props for dynamic rendering.",
    link: "https://www.youtube.com/watch?v=GmZwVLoSkD0&t=9s",
  },
  {
    id: 3,
    img: youtubeAssets.videos.FullScreenToggle,
    title: "Full Screen Toggle in JavaScript",
    description:
      "A tutorial on how to implement a full-screen toggle feature using JavaScript, allowing users to switch between normal and full-screen modes.",
    link: "https://www.youtube.com/watch?v=NoKE-5USDe8&t=25s",
  },
];
