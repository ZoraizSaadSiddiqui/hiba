import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Sab stack — ek dusray ke upar */}
      <div className="relative w-full min-h-[796px]">

        {/* 1) Sabse neeche — lowerhero */}
        <img
          src="/lowerhero.png"
          alt=""
          className="absolute inset-0 z-0 w-full h-[796px] object-cover"
        />

        {/* 2) Uske upar — herobg */}
        <img
          src="/herobg.png"
          alt=""
          className="absolute inset-0 z-[1] w-full h-[796px] object-cover"
        />

        {/* 3) Sabse upar — Hero */}
        <div className="relative z-[2] flex flex-col">
          <Hero />
        </div>

      </div>
    </main>
  );
}