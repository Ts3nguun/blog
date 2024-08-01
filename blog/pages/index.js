import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Blog } from "@/components/blogpost";
import { Trend } from "@/components/trend";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <Trend  />
      <Blog/>  
    </div>
  );
}