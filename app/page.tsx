import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-[1440px] h-[796px] flex-col overflow-hidden bg-[#C1652F]">
      {/* Background images */}
      <img src="/upper%20hero.png" alt="" className="absolute left-0 top-0 w-full h-auto object-cover pointer-events-none" />
      <img src="/lower%20hero.png" alt="" className="absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full">
        <Navbar />
        
        <div className="flex-1 flex items-center justify-center px-[64px]">
          <Hero />
        </div>
      </div>
    </main>
  );
}
