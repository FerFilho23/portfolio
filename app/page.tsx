"use client";

import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div>
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
