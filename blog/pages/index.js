import { Blog } from "@/components/blog";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Trend } from "@/components/trend";


export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <Trend />
      <Blog />
    </div>
  );
}