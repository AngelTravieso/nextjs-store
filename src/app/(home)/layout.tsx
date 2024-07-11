import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
};

export default HomeLayout;
