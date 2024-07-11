import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { Footer } from "app/components/shared/Footer";
import { MainProducts } from "../components/home/MainProducts/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
      <Footer />
    </main>
  );
}
