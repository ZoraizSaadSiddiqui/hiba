"use client";

export default function ProgrammeSection() {
  return (
    <section className="relative flex h-[733px] w-full items-center justify-center bg-[#FCEFDD] overflow-hidden">
      {/* Programme Front Image */}
      <img
        src="/programmeFront.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
      />

      {/* Main Content Wrapper */}
      <div className="relative flex h-full w-full flex-row items-end justify-center gap-[100px] pb-[110px]">
        {/* LEFT: Image Container */}
        <div className="flex w-[502px] shrink-0 items-end justify-center ml-[50px]">
          <div className="relative h-[512px] w-[502px] overflow-hidden rounded-[9999px_9999px_28px_28px] bg-[#D3ADB5]">
            <img
              width={502}
              src="/programmesection.jpg"
              alt="Children building skills"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Text Container */}
        <div className="flex w-[502px] shrink-0 flex-col items-start justify-end">
          {/* Programme Introduction */}
          <div className="w-full">
            <div className="flex h-[16px]">
              <p className="m-0 whitespace-nowrap font-sofia text-[12px] font-[400] uppercase leading-[16px] tracking-[3.5px] text-[#613339]">
                Programme Introduction
              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-2">
              <h2 className="m-0 font-monarcha text-[60px] font-[400] leading-[60px] tracking-[-1.5px] text-[#613339]">
                Building Skills
                <br />
                Through{" "}
                <span className="font-monarcha-italic italic text-[#B85428]">
                  Practical
                  <br />
                  Experiences
                </span>
              </h2>
            </div>
          </div>

          {/* Paragraph 1 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#8A5C62]">
              Hiba by Anthalora&apos;s Group Skills Building programme offers
              interactive, <br />
              age-appropriate workshops for children and young people aged
              6–18. <br />
              Each session uses practical activities, collaborative challenges
              and real- <br />
              world scenarios to help participants practise skills they can
              apply to <br />
              learning, relationships and everyday situations.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#8A5C62]">
              The programme focuses on personal development and skill building.
              <br />
              Workshops are not presented as therapy or a replacement for
              individual <br />
              clinical support. However, they are overseen by professionals
              who will{" "}
              <span className="whitespace-nowrap">
                provide recommendations where appropriate.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}