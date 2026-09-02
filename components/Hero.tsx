"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function Hero() {
  const [selectedDay, setSelectedDay] = useState<"Saturday" | "Sunday">(
    "Saturday",
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date(2026, 7, 15));
  const [pickerHour, setPickerHour] = useState(12);
  const [pickerMinute, setPickerMinute] = useState(0);
  const [pickerPeriod, setPickerPeriod] = useState<"AM" | "PM">("PM");
  const [timeMode, setTimeMode] = useState<"hour" | "minute">("hour");

  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return "";

    const [datePart, timePart] = dateTime.split("T");
    if (!datePart || !timePart) return "";

    const [year, month, day] = datePart.split("-").map(Number);
    const [hourString, minuteString] = timePart.split(":");

    const hour24 = Number(hourString);
    const minute = Number(minuteString);

    const selected = new Date(year, month - 1, day);

    const weekday = selected.toLocaleDateString("en-US", {
      weekday: "short",
    });

    const monthName = selected.toLocaleDateString("en-US", {
      month: "short",
    });

    const hour12 = hour24 % 12 || 12;
    const period = hour24 >= 12 ? "PM" : "AM";

    return `${weekday} ${day
      .toString()
      .padStart(2, "0")} ${monthName} · ${hour12}:${minute
      .toString()
      .padStart(2, "0")} ${period}`;
  };

  const openDateTimePicker = () => {
    if (selectedDate) {
      const [datePart, timePart] = selectedDate.split("T");

      if (datePart && timePart) {
        const [year, month, day] = datePart.split("-").map(Number);
        const [hourString, minuteString] = timePart.split(":");

        const hour24 = Number(hourString);

        setPickerDate(new Date(year, month - 1, day));
        setPickerHour(hour24 % 12 || 12);
        setPickerMinute(Number(minuteString));
        setPickerPeriod(hour24 >= 12 ? "PM" : "AM");
      }
    }

    setTimeMode("hour");
    setDateTimeOpen(true);
  };

  const applyDateTime = () => {
    let hour24 = pickerHour;

    if (pickerPeriod === "AM") {
      hour24 = pickerHour === 12 ? 0 : pickerHour;
    } else {
      hour24 = pickerHour === 12 ? 12 : pickerHour + 12;
    }

    const year = pickerDate.getFullYear();
    const month = String(pickerDate.getMonth() + 1).padStart(2, "0");
    const day = String(pickerDate.getDate()).padStart(2, "0");
    const hour = String(hour24).padStart(2, "0");
    const minute = String(pickerMinute).padStart(2, "0");

    setSelectedDate(`${year}-${month}-${day}T${hour}:${minute}`);
    setDateTimeOpen(false);
  };

  const previousMonth = () => {
    setPickerDate(
      new Date(
        pickerDate.getFullYear(),
        pickerDate.getMonth() - 1,
        1,
      ),
    );
  };

  const nextMonth = () => {
    setPickerDate(
      new Date(
        pickerDate.getFullYear(),
        pickerDate.getMonth() + 1,
        1,
      ),
    );
  };

  const getCalendarDays = () => {
    const year = pickerDate.getFullYear();
    const month = pickerDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(
      year,
      month + 1,
      0,
    ).getDate();

    const previousMonthDays = new Date(
      year,
      month,
      0,
    ).getDate();

    const days: {
      day: number;
      currentMonth: boolean;
      date: Date;
    }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = previousMonthDays - i;

      days.push({
        day,
        currentMonth: false,
        date: new Date(year, month - 1, day),
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        currentMonth: true,
        date: new Date(year, month, day),
      });
    }

    let nextDay = 1;

    while (days.length < 42) {
      days.push({
        day: nextDay,
        currentMonth: false,
        date: new Date(year, month + 1, nextDay),
      });

      nextDay++;
    }

    return days;
  };

  const calendarDays = getCalendarDays();

  const monthName = pickerDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const selectDate = (date: Date) => {
    setPickerDate(date);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  const totalPrice =
    selectedDay === "Saturday" ? "AED 220" : "AED 420";

  const clockValues =
    timeMode === "hour"
      ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const changeTimeWithScroll = (
    direction: "up" | "down",
  ) => {
    if (timeMode === "hour") {
      setPickerHour((prev) => {
        if (direction === "up") {
          return prev === 12 ? 1 : prev + 1;
        }

        return prev === 1 ? 12 : prev - 1;
      });
    } else {
      setPickerMinute((prev) => {
        if (direction === "up") {
          return prev === 59 ? 0 : prev + 1;
        }

        return prev === 0 ? 59 : prev - 1;
      });
    }
  };

  const handleTimeWheel = (
    e: React.WheelEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      changeTimeWithScroll("up");
    } else {
      changeTimeWithScroll("down");
    }
  };

  const handleTimeKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      changeTimeWithScroll("up");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      changeTimeWithScroll("down");
    }
  };

  return (
    <>
      <section className="relative h-[796px] overflow-visible">
        <div className="absolute left-0 top-0 flex h-[796px] w-[1400px] flex-col overflow-visible">
          <Navbar />

          <div className="box-border mx-auto flex w-[1240px] flex-1 items-center overflow-visible">
            <div className="relative z-10 flex w-[1240px] items-center justify-between overflow-visible">

              {/* LEFT SIDE */}
              <div className="flex w-[668px] shrink-0 flex-col justify-center">

                <h3 className="m-0 font-sofia text-[12px] font-normal leading-[16px] tracking-[3.5px] text-[#FCEFDD] uppercase">
                  GROUP SKILLS BUILDING
                </h3>

                <div className="relative top-[2px] w-[624px]">
                  <h1 className="m-0 font-monarcha text-[72px] font-normal leading-[72px] tracking-[-1.5px] text-[#FCEFDD]">
                    Practical Skills for
                    <br />
                    <span className="font-monarcha-italic font-normal italic">
                      Everyday Life
                    </span>
                  </h1>
                </div>

                <div className="w-[636px] pt-[4px]">
                  <p className="m-0 font-sofia text-[16px] font-normal leading-[24px] text-[#FCEFDD]">
                    Expert-led workshops helping children and young people aged
                    6–18 practise the
                    <br />
                    social, communication, thinking and everyday skills that
                    support them at school, at
                    <br />
                    home and in the wider community.
                  </p>
                </div>

                <div className="w-[636px] pt-[12px]">
                  <p className="m-0 font-sofia text-[16px] font-normal leading-[24px] text-[#FCEFDD]">
                    Three workshops take place every Saturday and Sunday. Choose
                    one class or book
                    <br />
                    multiple workshops based on your child's age and interests.
                  </p>
                </div>

                <div className="mt-[58px] flex w-[195px]">
                  <button
                    type="button"
                    className="flex h-[52px] w-[195px] items-center justify-center gap-[8px] rounded-full bg-[#FCEFDD] transition-transform duration-300 hover:scale-105"
                  >
                    <span className="font-sofia text-[20px] font-medium leading-[24px] text-[#B85428]">
                      Book Workshop
                    </span>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.5 8H10.5M10.5 8L8.5 6M10.5 8L8.5 10"
                        stroke="#B85428"
                        strokeWidth="0.83"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* BOOKING CARD */}
              <div
                className="
                  relative
                  box-border
                  flex
                  h-[546.56px]
                  w-[470px]
                  shrink-0
                  flex-col
                  overflow-visible
                  rounded-[36px]
                  border-[0.61px]
                  border-[#FCEFDD]
                  bg-[#FCEFDD]
                  p-[22px]
                "
              >

                {/* CARD HEADER */}
                <div className="flex h-[47.22px] w-full shrink-0 gap-[7.32px]">

                  <div className="relative h-[32.95px] w-[32.95px] shrink-0 rounded-full bg-[#613339]">
                    <svg
                      width="14.64"
                      height="14.64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FCEFDD"
                      strokeWidth="1.22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute left-[9.15px] top-[9.15px]"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                      />

                      <line
                        x1="16"
                        y1="2"
                        x2="16"
                        y2="6"
                      />

                      <line
                        x1="8"
                        y1="2"
                        x2="8"
                        y2="6"
                      />

                      <line
                        x1="3"
                        y1="10"
                        x2="21"
                        y2="10"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col gap-0">
                    <h3 className="m-0 h-[28px] w-[297px] font-monarcha text-[20px] font-normal leading-[28px] tracking-[-0.5px] text-[#613339]">
                      Book & Pay for a Group Workshop
                    </h3>

                    <p className="m-0 h-[18px] w-[232px] whitespace-nowrap font-sofia text-[12px] font-normal leading-[18px] tracking-[2px] text-[#613339] opacity-60">
                      Weekend workshops · Ages 6-18
                    </p>
                  </div>
                </div>

                {/* FORM */}
                <div className="mt-[32px] flex w-full flex-col gap-[8px]">

                  {/* PARTICIPANT + EMAIL */}
                  <div className="flex w-full gap-[10px]">

                    <div className="flex w-1/2 flex-col gap-[10px]">
                      <label className="m-0 h-[14px] font-monarcha text-[16px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]">
                        Participant name
                      </label>

                      <input
                        type="text"
                        placeholder="Child's name"
                        className="box-border h-[36px] w-full rounded-[32px] border-[0.5px] border-[#B85428] bg-white p-[12px] font-sofia text-[14px] font-light leading-[16px] text-[#8A5C62] outline-none placeholder:text-[#8A5C62]/40"
                      />
                    </div>

                    <div className="flex w-1/2 flex-col gap-[8px]">
                      <label className="m-0 h-[14px] font-monarcha text-[16px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]">
                        Parent email
                      </label>

                      <input
                        type="email"
                        placeholder="you@email.com"
                        className="box-border h-[36px] w-full rounded-[32px] border-[0.5px] border-[#B85428] bg-white px-[12px] font-sofia text-[14px] font-light leading-[16px] text-[#8A5C62] outline-none placeholder:text-[#8A5C62]/40"
                      />
                    </div>
                  </div>

                  {/* WORKSHOP CATEGORY */}
                  <div className="flex w-full flex-col gap-[10px]">

                    <label className="m-0 h-[14px] font-monarcha text-[16px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]">
                      Workshop category
                    </label>

                    <div className="relative h-[36px] w-full">

                      <button
                        type="button"
                        onClick={() =>
                          setCategoryOpen((prev) => !prev)
                        }
                        className={`flex h-[36px] w-full items-center justify-between rounded-[32px] border-[0.5px] border-[#B85428] bg-white px-[14px] font-sofia text-[14px] leading-[16px] transition-all ${
                          selectedCategory
                            ? "font-normal text-[#8A5C62]"
                            : "font-light text-[#8A5C62]/40"
                        }`}
                      >
                        <span
                          className={
                            selectedCategory
                              ? "font-normal text-[#8A5C62]"
                              : "font-light text-[#8A5C62]/40"
                          }
                        >
                          {selectedCategory || "Art"}
                        </span>

                        <svg
                          width="8"
                          height="5"
                          viewBox="0 0 8 5"
                          fill="none"
                          className={`transition-transform duration-200 ${
                            categoryOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M1 1L4 4L7 1"
                            stroke="#613339"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {categoryOpen && (
                        <div className="absolute left-0 top-[42px] z-[300] w-full overflow-hidden rounded-[16px] border-[0.5px] border-[#B85428] bg-white shadow-[0_8px_20px_rgba(97,51,57,0.12)]">
                          {[
                            "Art",
                            "Thus",
                            "Craft",
                            "Music",
                          ].map((category) => (
                            <button
                              key={category}
                              type="button"
                              onClick={() =>
                                handleCategoryChange(category)
                              }
                              className={`flex h-[34px] w-full items-center px-[14px] text-left font-sofia text-[14px] ${
                                selectedCategory === category
                                  ? "bg-[#FCEFDD] font-normal text-[#613339]"
                                  : "font-light text-[#8A5C62] hover:bg-[#FCEFDD]"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* DATE & TIME */}
                  <div className="flex w-full flex-col gap-[10px]">

                    <label className="m-0 h-[14px] font-monarcha text-[16px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]">
                      Date & Time
                    </label>

                    <div className="relative w-full">

                      <button
                        type="button"
                        onClick={openDateTimePicker}
                        className={`flex h-[36px] w-full items-center justify-between rounded-[32px] border-[0.5px] border-[#B85428] bg-white px-[12px] font-sofia text-[14px] leading-[16px] ${
                          selectedDate
                            ? "font-normal text-[#8A5C62]"
                            : "font-light text-[#8A5C62]/40"
                        }`}
                      >
                        <span
                          className={
                            selectedDate
                              ? "font-normal text-[#8A5C62]"
                              : "font-light text-[#8A5C62]/40"
                          }
                        >
                          {selectedDate
                            ? formatDateTime(selectedDate)
                            : "Date & Time"}
                        </span>

                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="#B85428"
                            strokeWidth="1.2"
                          />

                          <line
                            x1="16"
                            y1="2"
                            x2="16"
                            y2="6"
                            stroke="#B85428"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />

                          <line
                            x1="8"
                            y1="2"
                            x2="8"
                            y2="6"
                            stroke="#B85428"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />

                          <line
                            x1="3"
                            y1="10"
                            x2="21"
                            y2="10"
                            stroke="#B85428"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </button>

                      {dateTimeOpen && (
                        <div className="absolute left-0 top-[44px] z-[500] w-full overflow-hidden rounded-[20px] border border-[#B85428]/25 bg-white shadow-[0_12px_30px_rgba(97,51,57,0.16)]">

                          <div className="flex w-full">

                            {/* CALENDAR */}
                            <div className="w-[55%] border-r border-[#613339]/10 p-[10px]">

                              <div className="mb-[8px] flex items-center justify-between">

                                <button
                                  type="button"
                                  onClick={previousMonth}
                                  className="flex h-[22px] w-[22px] items-center justify-center rounded-full text-[#613339] hover:bg-[#FCEFDD]"
                                >
                                  ‹
                                </button>

                                <span className="font-monarcha text-[14px] font-medium text-[#613339]">
                                  {monthName}
                                </span>

                                <button
                                  type="button"
                                  onClick={nextMonth}
                                  className="flex h-[22px] w-[22px] items-center justify-center rounded-full text-[#613339] hover:bg-[#FCEFDD]"
                                >
                                  ›
                                </button>

                              </div>

                              <div className="mb-[4px] grid grid-cols-7">

                                {[
                                  "Su",
                                  "Mo",
                                  "Tu",
                                  "We",
                                  "Th",
                                  "Fr",
                                  "Sa",
                                ].map((day) => (
                                  <div
                                    key={day}
                                    className="text-center font-sofia text-[10px] font-medium text-[#613339]/50"
                                  >
                                    {day}
                                  </div>
                                ))}

                              </div>

                              <div className="grid grid-cols-7 gap-y-[2px]">

                                {calendarDays.map(
                                  (item, index) => {
                                    const isSelected =
                                      item.date.getFullYear() ===
                                        pickerDate.getFullYear() &&
                                      item.date.getMonth() ===
                                        pickerDate.getMonth() &&
                                      item.date.getDate() ===
                                        pickerDate.getDate();

                                    return (
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() =>
                                          selectDate(item.date)
                                        }
                                        className={`mx-auto flex h-[25px] w-[25px] items-center justify-center rounded-full font-sofia text-[10px] transition-all ${
                                          isSelected
                                            ? "bg-[#B85428] text-[#FCEFDD]"
                                            : item.currentMonth
                                              ? "text-[#613339] hover:bg-[#FCEFDD]"
                                              : "text-[#613339]/25"
                                        }`}
                                      >
                                        {item.day}
                                      </button>
                                    );
                                  },
                                )}

                              </div>
                            </div>

                            {/* CLOCK */}
                            <div className="flex w-[45%] flex-col items-center px-[8px] py-[10px]">

                              <div className="flex items-center justify-center gap-[4px]">

                                <button
                                  type="button"
                                  tabIndex={0}
                                  onClick={() =>
                                    setTimeMode("hour")
                                  }
                                  onWheel={handleTimeWheel}
                                  onKeyDown={handleTimeKeyDown}
                                  className={`flex h-[38px] w-[43px] items-center justify-center rounded-[7px] font-sofia text-[18px] font-medium outline-none ${
                                    timeMode === "hour"
                                      ? "bg-[#FCEFDD] text-[#B85428]"
                                      : "bg-[#F7F7F7] text-[#613339]"
                                  }`}
                                >
                                  {String(pickerHour).padStart(
                                    2,
                                    "0",
                                  )}
                                </button>

                                <span className="font-sofia text-[20px] font-medium text-[#613339]">
                                  :
                                </span>

                                <button
                                  type="button"
                                  tabIndex={0}
                                  onClick={() =>
                                    setTimeMode("minute")
                                  }
                                  onWheel={handleTimeWheel}
                                  onKeyDown={handleTimeKeyDown}
                                  className={`flex h-[38px] w-[43px] items-center justify-center rounded-[7px] font-sofia text-[18px] font-medium outline-none ${
                                    timeMode === "minute"
                                      ? "bg-[#FCEFDD] text-[#B85428]"
                                      : "bg-[#F7F7F7] text-[#613339]"
                                  }`}
                                >
                                  {String(pickerMinute).padStart(
                                    2,
                                    "0",
                                  )}
                                </button>

                                <div className="ml-[2px] flex flex-col">

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setPickerPeriod("AM")
                                    }
                                    className={`h-[19px] w-[36px] rounded-t-[4px] border border-[#B85428]/25 font-sofia text-[12px] ${
                                      pickerPeriod === "AM"
                                        ? "bg-[#B85428] text-[#FCEFDD]"
                                        : "bg-white text-[#613339]/60"
                                    }`}
                                  >
                                    AM
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setPickerPeriod("PM")
                                    }
                                    className={`h-[19px] w-[36px] rounded-b-[4px] border border-t-0 border-[#B85428]/25 font-sofia text-[12px] ${
                                      pickerPeriod === "PM"
                                        ? "bg-[#B85428] text-[#FCEFDD]"
                                        : "bg-white text-[#613339]/60"
                                    }`}
                                  >
                                    PM
                                  </button>

                                </div>
                              </div>

                              <div className="relative mt-[10px] h-[132px] w-[132px] rounded-full bg-[#F2F2F2]">

                                {(() => {
                                  const clockValue =
                                    timeMode === "hour"
                                      ? pickerHour % 12
                                      : pickerMinute / 5;

                                  const angle =
                                    clockValue * 30;

                                  const radians =
                                    (angle * Math.PI) / 180;

                                  const radius = 47;

                                  const handX =
                                    50 +
                                    (Math.sin(radians) *
                                      radius) /
                                      1.48;

                                  const handY =
                                    50 -
                                    (Math.cos(radians) *
                                      radius) /
                                      1.48;

                                  return (
                                    <>
                                      <div
                                        className="absolute left-1/2 top-1/2 h-[47px] w-[1.5px] origin-bottom bg-[#B85428]"
                                        style={{
                                          transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                                        }}
                                      />

                                      <div className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B85428]" />

                                      <div
                                        className="absolute h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B85428]"
                                        style={{
                                          left: `${handX}%`,
                                          top: `${handY}%`,
                                        }}
                                      />
                                    </>
                                  );
                                })()}

                                {clockValues.map(
                                  (value, index) => {
                                    const angle =
                                      index * 30;

                                    const radius = 51;

                                    const x =
                                      50 +
                                      (Math.sin(
                                        (angle * Math.PI) /
                                          180,
                                      ) *
                                        radius) /
                                        1.48;

                                    const y =
                                      50 -
                                      (Math.cos(
                                        (angle * Math.PI) /
                                          180,
                                      ) *
                                        radius) /
                                        1.48;

                                    const selected =
                                      timeMode === "hour"
                                        ? pickerHour === value
                                        : pickerMinute === value;

                                    return (
                                      <button
                                        key={value}
                                        type="button"
                                        onClick={() => {
                                          if (
                                            timeMode ===
                                            "hour"
                                          ) {
                                            setPickerHour(
                                              value as number,
                                            );

                                            setTimeMode(
                                              "minute",
                                            );
                                          } else {
                                            setPickerMinute(
                                              value as number,
                                            );
                                          }
                                        }}
                                        className={`absolute flex h-[23px] w-[23px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-sofia text-[10px] transition-all ${
                                          selected
                                            ? "bg-[#B85428] text-[#FCEFDD]"
                                            : "text-[#613339] hover:bg-[#FCEFDD]"
                                        }`}
                                        style={{
                                          left: `${x}%`,
                                          top: `${y}%`,
                                        }}
                                      >
                                        {timeMode === "hour"
                                          ? value
                                          : String(
                                              value,
                                            ).padStart(
                                              2,
                                              "0",
                                            )}
                                      </button>
                                    );
                                  },
                                )}

                              </div>

                              <div className="mt-[7px] flex items-center gap-[4px]">

                                <button
                                  type="button"
                                  onClick={() =>
                                    setTimeMode("hour")
                                  }
                                  className={`rounded-full px-[8px] py-[3px] font-sofia text-[10px] ${
                                    timeMode === "hour"
                                      ? "bg-[#B85428] text-[#FCEFDD]"
                                      : "bg-[#FCEFDD] text-[#613339]"
                                  }`}
                                >
                                  Hour
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    setTimeMode("minute")
                                  }
                                  className={`rounded-full px-[8px] py-[3px] font-sofia text-[10px] ${
                                    timeMode === "minute"
                                      ? "bg-[#B85428] text-[#FCEFDD]"
                                      : "bg-[#FCEFDD] text-[#613339]"
                                  }`}
                                >
                                  Minute
                                </button>

                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-[8px] border-t border-[#613339]/10 bg-[#FCEFDD]/50 px-[10px] py-[6px]">

                            <button
                              type="button"
                              onClick={() =>
                                setDateTimeOpen(false)
                              }
                              className="rounded-full px-[14px] py-[5px] font-sofia text-[12px] text-[#613339]"
                            >
                              Cancel
                            </button>

                            <button
                              type="button"
                              onClick={applyDateTime}
                              className="rounded-full bg-[#B85428] px-[15px] py-[5px] font-sofia text-[12px] font-medium text-[#FCEFDD]"
                            >
                              Done
                            </button>

                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* DAY */}
                  <div className="flex w-full flex-col gap-[10px]">

                    <label className="m-0 h-[14px] font-monarcha text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]">
                      Day
                    </label>

                    <div className="flex h-[26.849px] w-full items-center gap-[8px]">

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDay("Saturday")
                        }
                        className={`h-[26.849px] w-[97.224px] shrink-0 rounded-full border-[0.61px] border-[#61333933] p-0 font-sofia text-[14px] font-normal leading-[15px] transition-all duration-300 ${
                          selectedDay === "Saturday"
                            ? "bg-[#B85428] text-[#FCEFDD]"
                            : "bg-transparent text-[#B85428] hover:bg-[#B85428] hover:text-[#FCEFDD]"
                        }`}
                      >
                        Saturday
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDay("Sunday")
                        }
                        className={`h-[26.849px] w-[97.224px] shrink-0 rounded-full border-[0.61px] border-[#61333933] p-0 font-sofia text-[14px] font-normal leading-[15px] transition-all duration-300 ${
                          selectedDay === "Sunday"
                            ? "bg-[#B85428] text-[#FCEFDD]"
                            : "bg-transparent text-[#B85428] hover:bg-[#B85428] hover:text-[#FCEFDD]"
                        }`}
                      >
                        Sunday
                      </button>

                    </div>
                  </div>
                </div>

                {/* TOTAL + DURATION */}
                <div className="mt-[14px] w-full">

                  {/* DASHED LINE */}
                  <div className="w-full border-t-[2px] border-dashed border-[#B249244D]" />

                  {/* CONTENT BELOW LINE */}
                  <div className="flex h-[55px] w-full items-end justify-between">

                    {/* TOTAL */}
                    <div className="flex h-[39px] w-[103.78px] flex-col">
                      <label className="h-[15px] font-sans text-[10px] font-normal leading-[14.65px] text-[#613339B2]">
                        TOTAL
                      </label>

                      <label className="mt-[1px] block h-[24px] w-[103.78px] font-monarcha-italic text-[24px] font-medium italic leading-[24px] tracking-[-1.5px] text-[#B24924]">
                        {totalPrice}
                      </label>
                    </div>

                    {/* CLOCK + 60 MINUTES */}
                    <div className="flex h-[39px]  items-end justify-end gap-[4px] whitespace-nowrap">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="shrink-0"
                      >
                        <circle
                          cx="6"
                          cy="6"
                          r="5"
                          stroke="#6133398C"
                          strokeWidth="1"
                        />

                        <path
                          d="M6 3.5V6L7.5 7"
                          stroke="#6133398C"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>

                      <span className="font-sans text-[10px] translate-y-[3px] font-normal leading-[14.65px] text-[#613339B2]">
                        60 minutes per workshop
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOOK BUTTON */}
                <div className="mt-[22.04px] h-[40px] w-full">
                  <button
                    type="button"
                    className="flex h-[40px] w-full items-center justify-center rounded-full bg-[#B85428] transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <span className="font-sofia text-[16px] font-medium leading-[24px] text-[#FCEFDD]">
                      Book Workshop
                    </span>
                  </button>
                </div>

                {/* SECURE PAYMENT */}
                <div className="mt-[8px] flex h-[27px] w-full items-center justify-center">
                  <p className="m-0 text-center font-sofia text-[10px] font-normal leading-[10px] text-[#6133398C]">
                    Secure card payment · Confirmation sent by email
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}