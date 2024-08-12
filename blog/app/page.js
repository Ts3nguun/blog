"use client"

import { Blog } from "@/components/blog";
import { Hero } from "@/components/hero";
import { MainLayout } from "@/components/mainLayout";
import { Trend } from "@/components/trend";


export default function Home() {
  return (
    <div className="container mx-auto ">
        <Hero />
        <Trend />
        <Blog />
      {/* <MainLayout>
      </MainLayout> */}
    </div>
  );
}