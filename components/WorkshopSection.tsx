"use client";

import { useEffect, useRef, useState } from "react";

/* =========================
   SPACING SCALE (single source of truth)

   4  -> gap-1 / p-1
   8  -> gap-2 / p-2
   12 -> gap-3 / p-3
   16 -> gap-4 / p-4
   24 -> gap-6 / p-6
   32 -> gap-8 / p-8
   40 -> gap-10 / p-10
   96 -> py-24
========================= */

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
  note?: string;
}

const workshops: Workshop[] = [
  {
    id: 1,
    day: "TUESDAY",
    category: "SENSORY LAB",
    title: "Slime Science Lab",
    description:
      "Create cloud slime, butter slime, clear slime and crunchy slime — then discover the neuroscience behind why each one affects your brain differently.",
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
      "Turn microwave-cooked rice and colourful toppings into edible works of art — with a twist: your design must also be perfectly balanced.",
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
      "Learn the ceremonial technique behind the world's most photographed drink, master the perfect whisk and create your own layered latte art to take home.",
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
    title: "Bubble Tea Lab",
    description:
      "Steep the pearls, choose your flavours and shake, layer and sip a bubble tea that's entirely your own creation.",
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
    title: "Marble Roller Coaster Studio",
    description:
      "Design a thrilling marble roller coaster — then work as a team to connect them all into one incredible mega-track.",
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
      "Become robot engineers, investigate faults and repair a collection of mystery robots and electronic gadgets — then document every step on a tablet.",
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
      "Every team receives the same sealed box filled with strange objects. Your mission: invent a working machine — then pitch it to our panel of investors.",
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
    note: "Bracelet Bar (Girls only)",
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
      <span
        className="
          inline-flex items-center justify-center
          whitespace-nowrap
          rounded-full
          bg-[#C1652F]
          px-3 py-1
          font-sofia text-[10px] font-normal uppercase
          leading-[15px] tracking-[1.6px]
          text-[#FCEFDD]
        "
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className="
        inline-flex items-center justify-center
        whitespace-nowrap
        rounded-full
        border border-[#C1652F]/30
        bg-[#C1652F]/12
        px-3 py-1
        font-sofia text-[10px] font-normal uppercase
        leading-[15px] tracking-[1.6px]
        text-[#62343A]
      "
    >
      {label}
    </span>
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
        whitespace-nowrap
        font-['Inter'] text-[12px] font-medium
        leading-[16px] tracking-[0px]
        text-[#C1652F]
        ${isFullyBooked ? "opacity-50" : "opacity-100"}
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
    <div className="flex h-full w-full flex-col items-stretch sm:w-44">
      <div className="flex flex-col gap-2">
        <button
          type="button"
          disabled={isFullyBooked}
          className={`
            flex w-full items-center justify-center gap-1.5
            rounded-full
            bg-[#C1652F]
            px-5 py-2.5
            font-sofia text-[11px] font-semibold
            tracking-[0.02em]
            text-white
            transition-opacity duration-300 ease-in-out
            hover:opacity-90
            disabled:cursor-not-allowed
            ${isFullyBooked ? "opacity-40" : "opacity-100"}
          `}
        >
          {!isFullyBooked && <span>+</span>}
          Add to booking
        </button>

        <button
          type="button"
          className="
            flex w-full items-center justify-center
            rounded-full
            border border-[#C1652F40]
            px-6 py-2.5
            font-sofia text-[12px] font-medium
            leading-[16px] tracking-[0px]
            text-[#613339]
            transition-opacity duration-300 ease-in-out
            hover:opacity-70
          "
        >
          {availability === "Fully booked"
            ? "Book a Class"
            : "Book Workshop"}
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-2">
        
         <a href="#"
          className="
            flex items-center justify-center
            py-1
            font-sofia text-[12px] font-medium
            leading-[16px] tracking-[0px]
            text-[#C1652F]
            underline decoration-[#C1652F]
            underline-offset-2
            transition-opacity duration-300 ease-in-out
            hover:opacity-70
          "
        >
          More Info
        </a>
      </div>
    </div>
  );
}

/* =========================
   DETAIL FIELD
========================= */

function DetailField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <p
        className="
          font-sofia text-[9px] font-semibold uppercase
          leading-normal tracking-[0.12em]
          text-[#8A5C62] opacity-80
        "
      >
        {label}
      </p>

      <div
        className="
          min-w-0
          whitespace-nowrap
          font-['Sofia_Pro'] text-[12px] font-normal
          leading-[18px] tracking-[1px] capitalize
          text-[#8A5C62]
        "
      >
        {children}
      </div>
    </div>
  );
}

/* =========================
   WORKSHOP CARD
========================= */

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const isHighlighted = Boolean(workshop.note);

  return (
    <div
      className={`
        group
        flex flex-col gap-6
        rounded-3xl
        p-6
        transition-all duration-500 ease-in-out
        lg:flex-row
        ${isHighlighted ? "lg:items-start" : "lg:items-stretch"}

        ${
          isHighlighted
            ? "border-2 border-[#C1652F] bg-[#FCE7C6]"
            : "border-[0.67px] border-[#C1652F]/30 bg-[#FCEFDD] hover:border-2 hover:border-[#C1652F] hover:bg-[#FCE7C6]"
        }
      `}
    >
      {/* LEFT */}

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {workshop.note && (
          <p
            className="
              font-sofia text-[10px] font-semibold uppercase
              leading-[15px] tracking-[1.6px]
              text-[#613339]
            "
          >
            • {workshop.note}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <Badge label={workshop.day} variant="day" />
          <Badge
            label={workshop.category}
            variant="category"
          />
        </div>

        <h3
          className="
            font-['MonarchaW01-Regular']
            text-[24px] font-normal
            leading-[32px] tracking-[-0.5px]
            text-[#613339]
          "
        >
          {workshop.title}
        </h3>

        <p
          className="
            max-w-[520px]
            font-sofia text-[13px] font-normal
            leading-[20px]
            text-[#5A3A2E]
          "
        >
          {workshop.description}
        </p>
      </div>

      {/* MIDDLE */}

      <div
        className="
          flex flex-1 flex-col
          lg:w-[400px]
          lg:flex-none
        "
      >
        {/* Equal 2 columns */}

        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <div className="min-w-0">
            <DetailField label="Age range">
              {workshop.ageRange}
            </DetailField>
          </div>

          <div className="min-w-0">
            <DetailField label="Date & time">
              {workshop.date} · {workshop.time}
            </DetailField>
          </div>

          <div className="min-w-0">
            <DetailField label="Duration">
              {workshop.duration}
            </DetailField>
          </div>

          <div className="min-w-0">
            <DetailField label="Facilitator">
              {workshop.facilitator}
            </DetailField>
          </div>
        </div>

        {/* Price / Availability */}

        <div
          className={`
            flex flex-col
            ${isHighlighted ? "pt-3" : "flex-1 justify-end pt-3"}
          `}
        >
          <div className="grid grid-cols-2 gap-x-6">
            <div className="min-w-0">
              <DetailField label="Price">
                {workshop.price}
              </DetailField>
            </div>

            <div className="min-w-0">
              <DetailField label="Availability">
                <AvailabilityLabel
                  status={workshop.availability}
                />
              </DetailField>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex lg:w-44 lg:shrink-0">
        <BookingButton
          availability={workshop.availability}
        />
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
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-2"
    >
      <label
        className="
          font-['MonarchaW01-Regular']
          text-[14px] font-normal
          leading-[14px] tracking-[-0.5px]
          text-[#613339]
        "
      >
        {label}
      </label>

      {/* TRIGGER */}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          relative flex items-center justify-between
          rounded-full
          border border-[#B85428]
          bg-[#F6E3C9]
          px-4 py-2.5
          font-sofia text-[12px] font-light
          leading-[16px] tracking-[0px]
          text-[#8A5C62]
          outline-none
        "
      >
        <span className="opacity-70">{value}</span>

        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`
            shrink-0
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#613339"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* PANEL */}

      {open && (
        <ul
          role="listbox"
          className="
            absolute left-0 top-full z-20 mt-2
            flex w-full flex-col
            rounded-3xl
            border-2 border-[#C1652F]
            bg-white
            p-2
            shadow-lg
          "
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
            >
              <button
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`
                  w-full rounded-2xl
                  px-4 py-3
                  text-left
                  font-['MonarchaW01-Regular']
                  text-[16px] font-normal
                  leading-[20px]
                  transition-colors duration-150
                  hover:bg-[#FCE7C6]
                  ${
                    opt === value
                      ? "text-[#C1652F]"
                      : "text-[#62343A]"
                  }
                `}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function WeekendSection() {
  const [selectedDay, setSelectedDay] = useState("All");

  const [selectedAge, setSelectedAge] =
    useState("All ages");

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
    <section className="w-full bg-[#F6E3C9]">
      <div
        className="
          mx-auto flex w-full max-w-[1240px]
          flex-col px-4 py-24
        "
      >
        {/* HEADING */}

        <div className="flex flex-col gap-2">
          <span
            className="
              font-sofia text-[12px] font-semibold
              uppercase leading-[100%]
              tracking-[1.5px]
              text-[#62343A]
            "
          >
            Weekend Workshop Schedule
          </span>

          <h1
            className="
              max-w-[822px]
              font-monarcha
              text-[60px] font-normal
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

          <p
            className="
              max-w-[600px]
              font-sofia text-[16px] font-normal
              leading-[24px] tracking-normal
              text-[#8A5C62]
              mt-4
              text-na
            "

          >
            The programme will include workshops throughout
            the week, covering different skills and age groups.
          </p>
        </div>

        {/* FILTERS */}

        <div
          className="
            mt-4
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-4
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

        {/* WORKSHOP LIST */}

        <div className="mt-10 flex flex-col gap-6">
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
                py-16 text-center
                font-sofia text-[16px]
                text-[#8A5C62]
              "
            >
              No workshops match your filters. Try adjusting
              your selection.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}