import About from "@/components/About";
import Cards from "@/components/Cards";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <Cards />
    </div>
  );
}
