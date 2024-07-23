import Image from "next/image";

import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Help from "@/components/Help";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlight />
      <Help />
      <Services />

      <div className=" bg-gradient-to-b relative py-[30px] from-[#0477FE] to-[#0023FF] flex flex-col h-auto   px-[100]">
        <h1 className="text-[32px] text-[#FFFFFF] font-[700] font-poppins text-center">
          Client Testimonials
        </h1>

        <Testimonials />
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
