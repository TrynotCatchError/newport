import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import Integration from "@/components/Integration";
import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title: "Karin Sookkalya Portfolio",
  description: "Karin Sookkalya Portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Integration />
      <Contact />
      
    </main>
  );
}
