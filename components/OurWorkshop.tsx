"use client";

import React from "react";

interface OurWorkshop {
  number: string;
  title: string;
  description: string;
  tags: string[];
  wide?: boolean;
}

const ourworkshops: OurWorkshop[] = [
  {
    number: "01",
    title: "Healthy Lifestyles",
    description:
      "Supporting physical, sensory and emotional wellbeing through practical experiences.",
    tags: ["Slime Science Lab"],
  },
  {
    number: "02",
    title: "Nutrition & Food Practices",
    description:
      "Developing an understanding of food preparation, nutrition and healthy everyday choices.",
    tags: ["Sushi Art & Nutrition Lab"],
  },
  {
    number: "03",
    title: "Mental Resilience & Agency",
    description:
      "Building confidence, focus, adaptability and the ability to approach challenges.",
    tags: ["Matcha Latte Art Lab", "Impossible Inventions Workshop"],
  },
  {
    number: "04",
    title: "Daily Life & Independence",
    description:
      "Developing practical skills, sequencing and confidence completing everyday activities.",
    tags: ["Boba Tea Lab"],
  },
  {
    number: "05",
    title: "Relationship Practices",
    description:
      "Supporting communication, teamwork, negotiation and positive interaction with others.",
    tags: ["Marble Roller Coaster Studio"],
  },
  {
    number: "06",
    title: "Digital Life Practices",
    description:
      "Developing confidence with technology, troubleshooting and responsible digital skills.",
    tags: ["Robot Repair Workshop"],
  },
  {
    number: "07",
    title: "Financial & Consumer Practices",
    description:
      "Introducing age-appropriate budgeting, pricing, value and commercial decision-making.",
    tags: ["Boutique Bracelet Bar – Girls Only"],
    wide: true,
  },
];

interface OurWorkshopCardProps {
  ourworkshop: OurWorkshop;
}

/* =========================
   TOP CONTENT
   ========================= */
function WorkshopTopContent({
  ourworkshop,
}: OurWorkshopCardProps): React.ReactElement {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#b85429] text-white">
        <img
          src="/icon.svg"
          alt=""
          width={14}
          height={14}
          className="h-[13px] w-[13px]"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center gap-0">
        <em className="font-monarcha text-[14px] font-normal leading-[14px] tracking-[0px] text-[#8A5C62]">
          {ourworkshop.number}
        </em>

        <h3 className="m-0 font-monarcha text-[24px] font-normal leading-[32px] tracking-[-0.5px] text-[#713e37]">
          {ourworkshop.title}
        </h3>
      </div>
    </div>
  );
}

/* =========================
   DESCRIPTION
   ========================= */
function WorkshopDescription({
  ourworkshop,
}: OurWorkshopCardProps): React.ReactElement {
  return (
    <div className="h-[88px] w-full pt-[16px]">
      <p className="m-0 font-sofia text-[16px] font-normal leading-[24px] tracking-[0px] text-[#8A5C62]">
        {ourworkshop.description}
      </p>
    </div>
  );
}

/* =========================
   WORKSHOP TAGS
   ========================= */
function WorkshopTags({
  ourworkshop,
}: OurWorkshopCardProps): React.ReactElement {
  return (
    <div className="mt-[9px]">
      <div className="flex h-[17px] w-[78px] items-center justify-center font-inter text-[11px] font-normal uppercase leading-[16.5px] tracking-[1.98px] text-[#B24924]">
        Workshop
      </div>

      <div className="mt-[4px] flex flex-wrap gap-[4px]">
        {ourworkshop.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-[0.67px] border-[#B249244D] bg-[#B249241F] px-[12px] py-[4px] font-sofia text-[14px] font-normal leading-[21px] tracking-[0px] text-[#8A5C62]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================
   BOOK WORKSHOP BUTTON
   ========================= */
function BookWorkshopButton(): React.ReactElement {
  return (
    <button
      type="button"
      className="inline-flex h-[36px] w-[150px] items-center justify-center gap-[6px] rounded-full bg-[#b85429] px-[20px] py-[10px] text-center font-inter text-[12px] font-medium leading-[16px] tracking-[0px] text-white transition-all duration-200 hover:bg-[#963f1d]"
    >
      <span>Book Workshop</span>

      <svg
        className="shrink-0"
        width="10"
        height="10"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.5 2V11M2 6.5H11"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

/* =========================
   WORKSHOP CARD
   ========================= */
function OurWorkshopCard({
  ourworkshop,
}: OurWorkshopCardProps): React.ReactElement {
  return (
    <div
      className={`group flex w-full flex-col rounded-[28px] border-2 border-[#B2492440] bg-[#fff0dc] p-[24px] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] ${
        ourworkshop.wide
          ? "h-[260px] lg:col-span-3"
          : "h-[370px]"
      }`}
    >
      {ourworkshop.wide ? (
        /* ==================================
           LAST BRACELET CARD
           ================================== */
        <div className="flex h-full w-full items-start justify-between gap-0">
          {/* LEFT CONTENT */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Top Content */}
            <WorkshopTopContent ourworkshop={ourworkshop} />

            {/* Description */}
            <WorkshopDescription ourworkshop={ourworkshop} />

            {/* Workshop */}
            <WorkshopTags ourworkshop={ourworkshop} />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex h-full w-[200px] shrink-0 items-center justify-center">
            <BookWorkshopButton />
          </div>
        </div>
      ) : (
        /* ==================================
           NORMAL CARDS 01 - 06
           ================================== */
        <>
          {/* Top Content */}
          <WorkshopTopContent ourworkshop={ourworkshop} />

          {/* Description */}
          <WorkshopDescription ourworkshop={ourworkshop} />

          {/* Workshop */}
          <WorkshopTags ourworkshop={ourworkshop} />

          {/* Button */}
          <div className="mt-auto flex justify-start pt-[2px]">
            <BookWorkshopButton />
          </div>
        </>
      )}
    </div>
  );
}

/* =========================
   MAIN SECTION
   ========================= */
export default function OurWorkshops(): React.ReactElement {
  return (
    <section className="w-full border-y-2 border-[#B85429] py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-[100px]">
        {/* SECTION HEADING */}
        <div className="flex h-[188px] w-full flex-col items-center text-center">
          <p className="m-0 h-[12px] w-full font-sofia text-[12px] font-semibold uppercase leading-[100%] tracking-[1.5px] text-[#62343A]">
            Workshop Categories
          </p>

          <h2 className="mt-2 h-[60px] w-[592px] text-center font-monarcha text-[60px] font-normal leading-[60px] tracking-[-1.5px]">
            Explore Our{" "}
            <em className="font-monarcha-italic text-[#B24928]">
              Workshops
            </em>
          </h2>

          <p className="mt-2 h-[48px] w-[746px] font-sofia text-center text-[16px] font-normal leading-[24px] text-[#8A5C62]">
            Our workshops are grouped around the KHDA Skills for Life
            domains, helping families explore sessions
            <br />
            based on the skills their child would like to develop.
          </p>
        </div>

        {/* WORKSHOP GRID */}
        <div className="grid w-full grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3">
          {ourworkshops.map((ourworkshop) => (
            <OurWorkshopCard
              key={ourworkshop.number}
              ourworkshop={ourworkshop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}