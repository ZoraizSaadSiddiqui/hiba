import React from 'react';

export default function Hero() {
  return (
    <>
      <section
        className="w-[1440px] h-[796px]" >
        <img
          src="/upperhero.png"
          alt=""
          width={1440}
          height={796}
          className="block w-[1440px] h-[796px] object-none"
        />
    

      {/* Lower Hero */}
     
        <img
          src="/lowerhero.png"
          alt=""
          width={1440}
          height={796}
          className="block w-[1440px] h-[796px] object-none"
        />
   
        {/* Left side text container */}
        <div className="relative z-10 flex w-[668px] flex-col justify-center">
          <h3 className="font-['Sofia_Pro'] font-normal text-[12px] leading-[16px] tracking-[3.5px] text-[#FCEFDD] uppercase">
            GROUP SKILLS BUILDING
          </h3>

          <div className="w-[624px] pt-[16px]">
            <h1 className="m-0 font-['MonarchaW01-Regular'] font-normal text-[72px] leading-[72px] tracking-[-1.5px] text-[#FCEFDD]">
              Practical Skills for
              <br />
              <span className="font-['MonarchaW01-RegularItalic'] font-normal italic">
                Everyday Life
              </span>
            </h1>
          </div>

          <div className="w-[636px] pt-[32px]">
            <p className="m-0 font-['Sofia_Pro'] font-normal text-[16px] leading-[24px] text-[#FCEFDD]">
              Expert-led workshops helping children and young people aged 6–18 practise the
              <br />
              social, communication, thinking and everyday skills that support them at school, at
              <br />
              home and in the wider community.
            </p>
          </div>

          <div className="w-[636px] pt-[32px]">
            <p className="m-0 font-['Sofia_Pro'] font-normal text-[16px] leading-[24px] text-[#FCEFDD]">
              Three workshops take place every Saturday and Sunday. Choose one class or book
              <br />
              multiple workshops based on your child’s age and interests.
            </p>
          </div>

          <div className="flex w-[195px] flex-col pt-[40px]">
            <button
              type="button"
              className="flex h-[52px] w-[195px] shrink-0 items-center gap-[10px] rounded-full bg-[#FCEFDD] px-[28px] transition-transform hover:scale-105"
            >
              <span className="font-['Sofia_Pro'] font-medium text-[16px] leading-[24px] text-[#B85428]">
                Book Workshop
              </span>

              <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 8H10.5M10.5 8L8.5 6M10.5 8L8.5 10"
                    stroke="#B85428"
                    strokeWidth="0.83"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right side form card */}
        <div
          className="
            relative z-10
            box-border
            w-[470px]
            h-[546.56px]
            rounded-[36px]
            border-[0.61px]
            border-[#FCEFDD]
            bg-[#FCEFDD]
            p-[21.97px]
          "
        >
          {/* Form Header */}
          <div className="flex h-[47.22px] w-[424.84px] gap-[7.32px]">
            <div className="relative grid h-[32.95px] w-[32.95px] grid-cols-1 grid-rows-1 rounded-full bg-[#613339]">
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
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <div className="flex flex-col gap-1">
              <h3
                className="h-[28px] w-[297px] text-[20px] font-normal leading-[28px] tracking-[-0.5px] text-[#613339]"
                style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
              >
                Book & Pay for a Group Workshop
              </h3>

              <p
                className="h-[18px] w-[232px] whitespace-nowrap text-[12px] font-normal leading-[18px] tracking-[2px] text-[#613339] opacity-60"
                style={{ fontFamily: 'Sofia Pro, sans-serif' }}
              >
                Weekend workshops &middot; Ages 6-18
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="h-[364.94px] w-[424.84px]">
            {/* Participant + Email */}
            <div className="flex gap-[10px]">
              <div className="flex h-[82px] w-[207px] flex-col gap-[8px] pt-[24px]">
                <label
                  className="h-[14px] w-[108px] text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]"
                  style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
                >
                  Participant name
                </label>

                <input
                  type="text"
                  className="box-border h-[36px] w-[207px] rounded-[32px] border-[0.5px] border-[#B85428] bg-white p-[12px] text-[12px] font-light leading-[16px] tracking-[0px] text-[#8A5C62] outline-none placeholder:text-[#8A5C62]/40"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                  placeholder="Child's name"
                />
              </div>

              <div className="flex h-[82px] w-[207px] flex-col gap-[8px] pt-[24px]">
                <label
                  className="h-[14px] w-[108px] text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]"
                  style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
                >
                  Parent email
                </label>

                <input
                  type="email"
                  className="box-border h-[36px] w-[207px] rounded-[32px] border-[0.5px] border-[#B85428] bg-white p-[12px] text-[12px] font-light leading-[16px] tracking-[0px] text-[#8A5C62] outline-none placeholder:text-[#8A5C62]/40"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* Workshop Category */}
            <div className="flex h-[70.59px] w-[424px] flex-col gap-[8px] pt-[12px]">
              <label
                className="h-[14px] w-[119px] text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]"
                style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
              >
                Workshop category
              </label>

              <div className="relative h-[36px] w-[424px]">
                <select
                  className="box-border h-[36px] w-[424px] appearance-none rounded-[32px] border-[0.5px] border-[#B85428] bg-white pl-[12px] pr-[36px] text-[12px] font-light leading-[16px] tracking-[0px] text-[#8A5C62]/60 outline-none"
                  style={{
                    fontFamily: 'Sofia Pro, sans-serif',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Social Skills
                  </option>
                  <option value="art">Art</option>
                  <option value="craft">Craft</option>
                  <option value="music">Music</option>
                </select>

                <svg
                  width="3.2"
                  height="6.4"
                  viewBox="0 0 4 7"
                  fill="none"
                  className="pointer-events-none absolute right-[16px] top-1/2"
                  style={{
                    transform: 'translateY(-50%) rotate(90deg)',
                  }}
                >
                  <path
                    d="M1 1L3 3.5L1 6"
                    stroke="#613339"
                    strokeWidth="1.07"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex h-[70.59px] w-[424px] flex-col gap-[8px] pt-[12px]">
              <label
                className="h-[14px] w-[119px] text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]"
                style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
              >
                Date & Time
              </label>

              <div className="relative h-[36px] w-[424px]">
                <input
                  type="text"
                  value="Sat 15 Aug · 09:30"
                  readOnly
                  className="box-border h-[36px] w-[424px] rounded-[32px] border-[0.5px] border-[#B85428] bg-white p-[12px] pr-[44px] text-[12px] font-light leading-[16px] tracking-[0px] text-[#8A5C62]/60 outline-none"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                />

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#B85428"
                    strokeWidth="1.17"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="#B85428"
                    strokeWidth="1.17"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="#B85428"
                    strokeWidth="1.17"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="#B85428"
                    strokeWidth="1.17"
                  />
                  <circle cx="8" cy="14" r="0.8" fill="#B85428" />
                  <circle cx="12" cy="14" r="0.8" fill="#B85428" />
                  <circle cx="16" cy="14" r="0.8" fill="#B85428" />
                  <circle cx="8" cy="18" r="0.8" fill="#B85428" />
                  <circle cx="12" cy="18" r="0.8" fill="#B85428" />
                  <circle cx="16" cy="18" r="0.8" fill="#B85428" />
                </svg>
              </div>
            </div>

            {/* Day */}
            <div className="flex h-[68.76px] w-[424px] flex-col gap-[8px] pt-[12px]">
              <label
                className="h-[14px] w-[25px] text-[14px] font-normal leading-[14px] tracking-[-0.5px] text-[#613339]"
                style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
              >
                Day
              </label>

              <div className="flex h-[26.849px] w-[424px] items-center gap-[7.32px]">
                <button
                  type="button"
                  className="h-[26.849px] w-[97.224px] shrink-0 rounded-full border-[0.61px] border-[#61333933] bg-[#B85428] p-0 text-[12px] font-normal leading-[15px] tracking-[0px] text-[#FCEFDD]"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                >
                  Saturday
                </button>

                <button
                  type="button"
                  className="h-[26.849px] w-[97.224px] shrink-0 rounded-full border-[0.61px] border-[#61333933] bg-transparent p-0 text-[12px] font-normal leading-[15px] tracking-[0px] text-[#613339] hover:bg-[#B85428] hover:text-[#FCEFDD]"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                >
                  Sunday
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex h-[73px] w-[424.844px] flex-col gap-[10px] pt-[18px]">
              <div
                className="relative flex h-[55px] w-[424.844px] justify-between border-t-[2px] border-dashed border-[#B249244D] pt-[14px]"
              >
                <div className="h-[39px] w-[103.78px]">
                  <div className="mb-1 h-[15px] w-[103.78px]">
                    <label className="font-['Inter'] text-[10.98px] font-normal leading-[14.65px] tracking-[0px] text-[#613339B2]">
                      TOTAL
                    </label>
                  </div>

                  <div className="h-[24px] w-[103.78px]">
                    <label
                      className="block h-[24px] w-[84px] text-center text-[24px] font-medium italic leading-[24px] tracking-[-1.5px] text-[#B24924]"
                      style={{
                        fontFamily: 'MonarchaW01-RegularItalic, serif',
                      }}
                    >
                      AED 220
                    </label>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 flex h-[15px] w-[132px] items-center gap-[4px]">
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

                  <div className="h-[15px] w-[132px] font-['Inter'] text-[10.98px] font-normal leading-[14.65px] tracking-[0px] text-[#613339B2]">
                    60 minutes per workshop
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <div className="h-[62.24px] w-[424.84px]">
                <button
                  type="button"
                  className="relative ml-[0.42px] mt-[22.04px] h-[40px] w-[424px] shrink-0 rounded-full bg-[#B85428]"
                >
                  <span
                    className="absolute left-[163px] top-[8.3px] h-[24px] w-[99px] text-[14px] font-medium leading-[24px] tracking-[0px] text-[#FCEFDD]"
                    style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                  >
                    Book Workshop
                  </span>
                </button>
              </div>

              {/* Secure Payment */}
              <div className="flex h-[27px] w-[424px] justify-center">
                <p
                  className="m-0 text-center text-[10px] font-normal leading-[10px] tracking-[0px] text-[#6133398C]"
                  style={{ fontFamily: 'Sofia Pro, sans-serif' }}
                >
                  Secure card payment &middot; Confirmation sent by email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Hero Image */}
      <section className="w-full">
        <img
          src="/lowerhero.png"
          alt=""
          className="block w-full"
        />
      </section>
    </>
  );
}