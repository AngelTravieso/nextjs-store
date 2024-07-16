import { MainProducts } from "../../components/home/MainProducts/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
