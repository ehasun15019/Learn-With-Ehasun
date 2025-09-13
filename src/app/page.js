import About from "@/components/About";
import Header from "@/components/Header";
import Tutorial from "@/components/Tutorial";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <Tutorial />
    </div>
  );
}
