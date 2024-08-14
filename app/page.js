"use client"

import { Blog } from "@/components/blog";
import { Hero } from "@/components/hero";
import { Trend } from "@/components/trend";


export default function Home() {
  return (
    <div className="container mx-auto ">
        <Hero />
        <Trend />
        <Blog />
    </div>
  );
}