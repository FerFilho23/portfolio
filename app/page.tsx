"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Hero />
        <Grid />
        <Projects />
      </div>
    </main>
  );
}
