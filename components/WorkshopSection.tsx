"use client";

import React, { useState } from "react";

interface Workshop {
  id: number;
  day: string;
  category: string;
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  price: string;
  date: string;
  time: string;
  facilitator: string;
  availability:
    | "Available"
    | "Limited places"
    | "Fully booked"
    | "Book a Class";
}

const workshops: Workshop[] = [
  {
    id: 1,
    day: "TUESDAY",
    category: "SENSORY LAB",
    title: "Slime Science Lab",
    description:
      "Create cloud slime, butter slime, clear slime and crunchy slime — then discover",
    ageRange: "7–14 Years",
    duration: "60 Minutes",
    price: "AED 220",
    date: "Tue 11 Aug",
    time: "2:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Available",
  },
  {
    id: 2,
    day: "TUESDAY",
    category: "YOUNG CHEFS",
    title: "Sushi Art & Nutrition Lab",
    description:
      "Turn microwave-cooked rice and colourful toppings into edible works of art —",
    ageRange: "6–12 Years",
    duration: "60 Minutes",
    price: "AED 350",
    date: "Tue 11 Aug",
    time: "3:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Limited places",
  },
  {
    id: 3,
    day: "WEDNESDAY",
    category: "YOUNG CHEFS",
    title: "Matcha Latte Art Lab",
    description:
      "Learn the ceremonial technique behind the world's most photographed drink,",
    ageRange: "13–18 Years",
    duration: "60 Minutes",
    price: "AED 230",
    date: "Wed 12 Aug",
    time: "2:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Available",
  },
  {
    id: 4,
    day: "THURSDAY",
    category: "BUILD LAB",
    title: "Marble Roller Coaster Studio",
    description:
      "Steep the pearls, choose your flavours and shake, layer and sip a bubble tea",
    ageRange: "6–12 Years",
    duration: "60 Minutes",
    price: "AED 320",
    date: "Thu 13 Aug",
    time: "2:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Available",
  },
  {
    id: 5,
    day: "WEDNESDAY",
    category: "YOUNG CHEFS",
    title: "Boba Tea Lab",
    description:
      "Design a thrilling marble roller coaster — then work as a team to connect",
    ageRange: "6–12 Years",
    duration: "60 Minutes",
    price: "AED 250",
    date: "Wed 12 Aug",
    time: "3:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Fully booked",
  },
  {
    id: 6,
    day: "THURSDAY",
    category: "FIX IT LAB",
    title: "Robot Repair Workshop",
    description:
      "Become robot engineers, investigate faults and repair a collection of mystery",
    ageRange: "6–12 Years",
    duration: "60 Minutes",
    price: "AED 230",
    date: "Thu 13 Aug",
    time: "3:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Limited places",
  },
  {
    id: 7,
    day: "FRIDAY",
    category: "FIX IT LAB",
    title: "Impossible Inventions Workshop",
    description:
      "Every team receives the same sealed box filled with strange objects. Your",
    ageRange: "6–12 Years",
    duration: "60 Minutes",
    price: "AED 230",
    date: "Fri 14 Aug",
    time: "2:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Limited places",
  },
  {
    id: 8,
    day: "FRIDAY",
    category: "CREATE LAB",
    title: "Bead & Jewellery Design Studio",
    description:
      "Choose your beads, design a signature pattern and price your own bracelet collection like a real boutique designer.",
    ageRange: "13–18 Years",
    duration: "60 Minutes",
    price: "AED 230",
    date: "Fri 14 Aug",
    time: "3:00 PM",
    facilitator: "Occupational Therapist",
    availability: "Available",
  },
];

const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ageGroups = [
  "All ages",
  "6–12 Years",
  "7–14 Years",
  "13–18 Years",
];

const categories = [
  "All categories",
  "Sensory Lab",
  "Young Chefs",
  "Build Lab",
  "Fix It Lab",
  "Create Lab",
];

const availabilities = [
  "All",
  "Available",
  "Limited places",
  "Fully booked",
];

/* =========================
   BADGE
========================= */

function Badge({
  label,
  variant = "day",
}: {
  label: string;
  variant?: "day" | "category";
}) {
  if (variant === "day") {
    return (
      <div
        className="
          box-border
          inline-flex
          h-[23px]
          w-[77px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-[22369600px]
          bg-[#C1652F]
          px-[12px]
          py-[4px]
          font-sofia
          text-[10px]
          font-normal
          leading-[15px]
          tracking-[1.6px]
          uppercase
          text-[#FCEFDD]
        "
      >
        <span className="whitespace-nowrap">{label}</span>
      </div>
    );
  }

  return (
    <div
      className="
        box-border
        inline-flex
        h-[24.33333396911621px]
        w-[106.33333587646484px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[22369600px]
        border-[0.67px]
        border-[#C1652F]/30
        bg-[#C1652F]/12
        px-[12px]
        py-[4px]
        font-sofia
        text-[10px]
        font-normal
        leading-[15px]
        tracking-[1.6px]
        uppercase
        text-[#62343A]
      "
    >
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}

/* =========================
   AVAILABILITY
========================= */

function AvailabilityLabel({
  status,
}: {
  status: Workshop["availability"];
}) {
  const isFullyBooked = status === "Fully booked";

  return (
    <span
      className={`
        inline-block
        h-[16px]
        whitespace-nowrap
        font-['Inter']
        text-[12px]
        font-medium
        leading-[16px]
        tracking-[0px]
        text-[#C1652F]
        ${
          isFullyBooked
            ? "w-[73px] opacity-50"
            : "w-[52px] opacity-100"
        }
      `}
    >
      {status}
    </span>
  );
}

/* =========================
   BOOKING BUTTON
========================= */

function BookingButton({
  availability,
}: {
  availability: Workshop["availability"];
}) {
  const isFullyBooked = availability === "Fully booked";

  return (
    <div className="flex w-[176px] h-[112px] flex-col items-center gap-[8px]">
      <button
        type="button"
        disabled={isFullyBooked}
        className={`
          flex
          w-[176px]
          h-[36px]
          items-center
          justify-center
          gap-[6px]
          rounded-[22369600px]
          px-[20px]
          py-[10px]
          font-sofia
          text-[11px]
          font-semibold
          tracking-[0.02em]
          text-white
          transition-opacity
          duration-300
          ease-in-out
          hover:opacity-90
          disabled:cursor-not-allowed
          ${
            isFullyBooked
              ? "bg-[#C1652F] opacity-40"
              : "bg-[#C1652F] opacity-100"
          }
        `}
      >
        {!isFullyBooked && <span>+</span>}
        Add to booking
      </button>

      <button
        type="button"
        className="
          flex
          w-[176px]
          h-[36px]
          items-center
          justify-center
          rounded-[22369600px]
          border
          border-[#C1652F40]
          px-[28px]
          font-sofia
          text-[12px]
          font-medium
          leading-[16px]
          tracking-[0px]
          text-[#613339]
          transition-opacity
          duration-300
          ease-in-out
          hover:opacity-70
        "
      >
        {availability === "Fully booked"
          ? "Book a Class"
          : "Book Workshop"}
      </button>

      <a
        href="#"
        className="
          flex
          w-[54px]
          h-[16px]
          items-center
          justify-center
          font-sofia
          text-[12px]
          font-medium
          leading-[16px]
          tracking-[0px]
          text-[#C1652F]
          underline
          decoration-[#C1652F]
          underline-offset-0
          transition-opacity
          duration-300
          ease-in-out
          hover:opacity-70
        "
      >
        More Info
      </a>
    </div>
  );
}

/* =========================
   WORKSHOP CARD
========================= */

function WorkshopCard({
  workshop,
}: {
  workshop: Workshop;
}) {
  return (
    <div
      className="
        group
        box-border
        flex
        h-[169.9687042236328px]
        w-[1239px]
        rounded-[24px]
        border-[0.67px]
        border-[#C1652F]/30
        bg-[#FCEFDD]
        p-[24px]
        transition-all
        duration-500
        ease-in-out
        hover:h-[209.33334350585938px]
        hover:w-[1239px]
        hover:rounded-[24px]
        hover:border-[2px]
        hover:border-t-[2px]
        hover:border-[#C1652F]
        hover:bg-[#F9DEB9]
      "
    >
      <div className="flex w-full items-start gap-4">

        {/* LEFT */}

        <div
          className="
            h-[116.33333587646484px]
            w-[505.5px]
            shrink-0
          "
        >
          {workshop.id === 8 && (
            <div
              className="
                h-[23px]
                w-[189px]
                shrink-0
                whitespace-nowrap
                font-sofia
                text-[10px]
                font-semibold
                leading-[15px]
                tracking-[1.6px]
                uppercase
                text-[#613339]
                opacity-100
                transition-all
                duration-500
                ease-in-out
              "
            >
              • BRACELET BAR (GIRLS ONLY)
            </div>
          )}

          {/* BADGES */}

          <div
            className="
              flex
              h-[24.33333396911621px]
              w-full
              items-start
              gap-[8px]
            "
          >
            <Badge
              label={workshop.day}
              variant="day"
            />

            <Badge
              label={workshop.category}
              variant="category"
            />
          </div>

          {/* TITLE */}

          <div
            className="
              box-border
              h-[44px]
              w-[553px]
              pt-[12px]
              opacity-100
            "
          >
            <h3
              className="
                m-0
                h-[32px]
                w-fit
                whitespace-nowrap
                font-['MonarchaW01-Regular']
                text-[24px]
                font-normal
                leading-[32px]
                tracking-[-0.5px]
                text-left
                text-[#613339]
                opacity-100
              "
            >
              {workshop.title}
            </h3>
          </div>

          {/* DESCRIPTION */}

          <div
            className="
              box-border
              h-[56px]
              w-[505.5px]
              max-w-[576px]
              pt-[8px]
              opacity-100
            "
          >
            <p
              className="
                m-0
                max-w-[505.5px]
                font-sofia
                text-[13px]
                font-normal
                leading-[20px]
                text-[#5A3A2E]
              "
            >
              {workshop.id === 1 && (
                <>
                  Create cloud slime, butter slime, clear slime and crunchy slime — then discover
                  <br />
                  the neuroscience behind why each one affects your brain differently.
                </>
              )}

              {workshop.id === 2 && (
                <>
                  Turn microwave-cooked rice and colourful toppings into edible works of art —
                  <br />
                  with a twist: your design must also be perfectly balanced.
                </>
              )}

              {workshop.id === 3 && (
                <>
                  Learn the ceremonial technique behind the world's most photographed drink,
                  <br />
                  master the perfect whisk and create your own layered latte art to take home.
                </>
              )}

              {workshop.id === 4 && (
                <>
                  Steep the pearls, choose your flavours and shake, layer and sip a bubble tea
                  <br />
                  that's entirely your own creation.
                </>
              )}

              {workshop.id === 5 && (
                <>
                  Design a thrilling marble roller coaster — then work as a team to connect
                  <br />
                  them all into one incredible mega-track.
                </>
              )}

              {workshop.id === 6 && (
                <>
                  Become robot engineers, investigate faults and repair a collection of mystery
                  <br />
                  robots and electronic gadgets — then document every step on a tablet.
                </>
              )}

              {workshop.id === 7 && (
                <>
                  Every team receives the same sealed box filled with strange objects. Your
                  <br />
                  mission invent a working machine — then pitch it to our panel of investors.
                </>
              )}

              {workshop.id === 8 && (
                <>
                  Choose your beads, design a signature pattern and price your own
                  <br />
                  bracelet collection like a real boutique designer.
                </>
              )}
            </p>
          </div>
        </div>

        {/* MIDDLE */}

        <div
          className="
            grid
            h-[117.96px]
            w-[395px]
            grid-cols-2
            grid-rows-3
            gap-x-[16px]
            gap-y-[12px]
          "
        >
          {/* COLUMN 1 — ROW 1 */}

          <div
            className="
              row-start-1
              col-start-1
              col-span-1
              row-span-1
              h-[31.32px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[18px] w-[189.5px]">
              <p
                className="
                  h-[18px]
                  w-[74px]
                  font-sofia
                  text-[9px]
                  font-semibold
                  uppercase
                  leading-normal
                  tracking-[0.12em]
                  text-[#8A5C62]
                  opacity-80
                "
              >
                Age range
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px]">
              <p
                className="
                  m-0
                  h-[18px]
                  w-[189.5px]
                  whitespace-nowrap
                  font-['Sofia_Pro']
                  text-[12px]
                  font-normal
                  leading-[18px]
                  tracking-[1px]
                  capitalize
                  text-[#8A5C62]
                  opacity-100
                "
              >
                {workshop.ageRange}
              </p>
            </div>
          </div>

          {/* COLUMN 2 — ROW 1 */}

          <div
            className="
              row-start-1
              col-start-2
              col-span-1
              row-span-1
              h-[31.322917938232422px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[18px] w-[189.5px]">
              <p
                className="
                  h-[18px]
                  w-[74px]
                  font-sofia
                  text-[9px]
                  font-semibold
                  uppercase
                  leading-normal
                  tracking-[0.12em]
                  text-[#8A5C62]
                  opacity-80
                "
              >
                Date & time
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px]">
              <p
                className="
                  h-[18px]
                  w-[189.5px]
                  whitespace-nowrap
                  font-['Sofia_Pro']
                  text-[12px]
                  font-normal
                  leading-[18px]
                  tracking-[1px]
                  capitalize
                  text-[#8A5C62]
                  opacity-100
                "
              >
                {workshop.date} · {workshop.time}
              </p>
            </div>
          </div>

          {/* COLUMN 1 — ROW 2 */}

          <div
            className="
              row-start-2
              col-start-1
              col-span-1
              row-span-1
              h-[31.322917938232422px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[14px] w-[189.5px] opacity-100">
              <p
                className="
                  h-[14px]
                  w-[61px]
                  font-['Inter']
                  text-[10px]
                  font-normal
                  uppercase
                  leading-[13.33px]
                  tracking-[1.4px]
                  text-[#61333980]
                  opacity-100
                "
              >
                Duration
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px] opacity-100">
              <p
                className="
                  h-[18px]
                  w-[70px]
                  font-['Sofia_Pro']
                  text-[12px]
                  font-normal
                  leading-[18px]
                  tracking-[1px]
                  capitalize
                  text-[#8A5C62]
                  opacity-100
                "
              >
                {workshop.duration}
              </p>
            </div>
          </div>

          {/* COLUMN 2 — ROW 2 */}

          <div
            className="
              row-start-2
              col-start-2
              col-span-1
              row-span-1
              h-[31.32px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[14px] w-[189.5px] opacity-100">
              <p
                className="
                  h-[14px]
                  w-[61px]
                  font-['Inter']
                  text-[10px]
                  font-normal
                  uppercase
                  leading-[13.33px]
                  tracking-[1.4px]
                  text-[#61333980]
                  opacity-100
                "
              >
                Facilitator
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px] opacity-100">
              <p
                className="
                  h-[18px]
                  w-[189.5px]
                  whitespace-nowrap
                  font-['Sofia_Pro']
                  text-[12px]
                  font-normal
                  leading-[18px]
                  tracking-[1px]
                  capitalize
                  text-[#8A5C62]
                  opacity-100
                "
              >
                {workshop.facilitator}
              </p>
            </div>
          </div>

          {/* COLUMN 1 — ROW 3 */}

          <div
            className="
              row-start-3
              col-start-1
              col-span-1
              row-span-1
              h-[31.322917938232422px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[18px] w-[189.5px] opacity-100">
              <p
                className="
                  h-[18px]
                  w-[82px]
                  font-['Sofia_Pro']
                  text-[12px]
                  font-light
                  uppercase
                  leading-[18px]
                  tracking-[1px]
                  text-[#8A5C62]
                  opacity-80
                "
              >
                Price
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px] opacity-100">
              <p
                className="
                  h-[18px]
                  w-[130px]
                  font-['Sofia_Pro']
                  text-[12px]
                  font-normal
                  capitalize
                  leading-[18px]
                  tracking-[1px]
                  text-[#8A5C62]
                  opacity-100
                "
              >
                {workshop.price}
              </p>
            </div>
          </div>

          {/* COLUMN 2 — ROW 3 */}

          <div
            className="
              row-start-3
              col-start-2
              col-span-1
              row-span-1
              h-[31.322917938232422px]
              w-[189.5px]
              opacity-100
            "
          >
            <div className="h-[18px] w-[189.5px] opacity-100">
              <p
                className="
                  h-[18px]
                  w-[82px]
                  font-['Sofia_Pro']
                  text-[12px]
                  font-light
                  uppercase
                  leading-[18px]
                  tracking-[1px]
                  text-[#8A5C62]
                  opacity-80
                "
              >
                Availability
              </p>
            </div>

            <div className="h-[18px] w-[189.5px] pt-[2px] opacity-100">
              <AvailabilityLabel
                status={workshop.availability}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex w-[176px] h-[112px] gap-[8px]">
          <BookingButton
            availability={workshop.availability}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================
   FILTER DROPDOWN
========================= */

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="
        flex
        h-[70.59px]
        w-[292px]
        flex-col
        gap-[8px]
        pt-[12px]
      "
    >
      <label
        className="
          block
          whitespace-nowrap
          font-['MonarchaW01-Regular']
          text-[14px]
          font-normal
          leading-[14px]
          tracking-[-0.5px]
          text-[#613339]
        "
      >
        {label}
      </label>

      <div
        className="
          relative
          box-border
          h-[36px]
          w-[292px]
          rounded-[32px]
          border-[0.5px]
          border-[#B85428]
          bg-[#F6E3C9]
        "
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            absolute
            left-[12px]
            top-1/2
            h-[16px]
            w-[calc(100%-40px)]
            -translate-y-1/2
            cursor-pointer
            appearance-none
            border-none
            bg-transparent
            p-0
            font-sofia
            text-[12px]
            font-light
            leading-[16px]
            tracking-[0px]
            text-[#8A5C62]
            outline-none
            opacity-60
          "
        >
          {options.map((opt) => (
            <option
              key={opt}
              value={opt}
              className="
                font-sofia
                text-[12px]
                font-light
                leading-[16px]
                text-[#8A5C62]
              "
            >
              {opt}
            </option>
          ))}
        </select>

        <div
          className="
            pointer-events-none
            absolute
            right-[12px]
            top-1/2
            flex
            h-[8px]
            w-[12px]
            -translate-y-1/2
            items-center
            justify-center
          "
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#613339"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function WeekendSection() {
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All ages");
  const [selectedCategory, setSelectedCategory] =
    useState("All categories");
  const [selectedAvailability, setSelectedAvailability] =
    useState("All");

  const filtered = workshops.filter((w) => {
    if (
      selectedDay !== "All" &&
      !w.day
        .toLowerCase()
        .startsWith(selectedDay.toLowerCase())
    ) {
      return false;
    }

    if (
      selectedAge !== "All ages" &&
      w.ageRange !== selectedAge
    ) {
      return false;
    }

    if (
      selectedCategory !== "All categories" &&
      w.category.toLowerCase() !==
        selectedCategory.toLowerCase()
    ) {
      return false;
    }

    if (
      selectedAvailability !== "All" &&
      w.availability !== selectedAvailability
    ) {
      return false;
    }

    return true;
  });

  return (
    <section
      className="
        w-full
        h-[2049.814208984375px]
        bg-[#F6E3C9]
        py-[100px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
        "
      >
        {/* HEADING */}

        <div className="flex flex-col gap-5">
          <span
            className="
              whitespace-nowrap
              font-sofia
              text-[12px]
              font-semibold
              uppercase
              leading-[100%]
              tracking-[1.5px]
              text-[#62343A]
            "
          >
            Weekend Workshop Schedule
          </span>

          <h1
            className="
              m-0
              h-[60px]
              w-[822px]
              font-monarcha
              text-[60px]
              font-normal
              leading-[60px]
              tracking-[-1.5px]
              text-[#3D1F1F]
            "
          >
            This Week&apos;s Workshop{" "}
            <em className="font-monarcha-italic text-[#B85428]">
              Schedule
            </em>
          </h1>
        </div>

        {/* DESCRIPTION */}

        <div
          className="
            h-[56px]
            w-[1240px]
            pt-[32px]
          "
        >
          <p
            className="
              m-0
              max-w-[975px]
              font-sofia
              text-[16px]
              font-normal
              leading-[24px]
              tracking-normal
              text-[#8A5C62]
            "
          >
            The programme will include workshops
            throughout the week, covering different
            skills and age groups.
          </p>
        </div>

        {/* FILTERS */}

        <div
          className="
            h-[110px]
            w-[1240px]
            pt-[40px]
          "
        >
          <div
            className="
              grid
              h-[64.5px]
              w-[1216px]
              grid-cols-4
              gap-[16px]
            "
          >
            <FilterDropdown
              label="Day"
              options={days}
              value={selectedDay}
              onChange={setSelectedDay}
            />

            <FilterDropdown
              label="Age group"
              options={ageGroups}
              value={selectedAge}
              onChange={setSelectedAge}
            />

            <FilterDropdown
              label="Workshop category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />

            <FilterDropdown
              label="Availability"
              options={availabilities}
              value={selectedAvailability}
              onChange={setSelectedAvailability}
            />
          </div>
        </div>

        {/* WORKSHOP LIST */}

        <div
          className="
            flex
            h-[193.96px]
            w-[1239px]
            flex-col
            gap-[24px]
            pt-[24px]
          "
        >
          {filtered.length > 0 ? (
            filtered.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
              />
            ))
          ) : (
            <div
              className="
                py-16
                text-center
                font-sofia
                text-[16px]
                text-[#8A5C62]
              "
            >
              No workshops match your filters.
              Try adjusting your selection.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}