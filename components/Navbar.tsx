'use client';

export default function Navbar() {
  return (
    <header className="mx-auto flex w-[1400px] justify-center pt-[32px]">
      <nav
        className="
          flex
          h-[70.33px]
          w-[1240px]
          items-center
          justify-between
          rounded-[22369600px]
          border-[0.5px]
          border-[rgba(255,255,255,0.5)]
          bg-[linear-gradient(90deg,rgba(252,239,221,1),rgba(252,239,221,0.8))]
          px-[24.5px]
          py-[12.5px]
          shadow-[0_36px_72px_-30px_rgba(90,41,50,0.3),0_12px_28px_-14px_rgba(90,41,50,0.2)]
        "
      >
        {/* Logo */}
        <div className="relative h-[45.33px] w-[109.78px] shrink-0">
          {/* Symbol */}
          <div className="absolute left-0 top-[8.1px] h-[28.5px] w-[28.26px]">
            <img
              src="/Group.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          {/* Hiba Text */}
          <div
            className="absolute left-[34px] top-0 m-0 flex h-[42.1px] w-[75.78px] items-start p-0 text-[33.22px] font-normal leading-[100%] tracking-[0%] text-[#6d4148]"
            style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
          >
            Hiba
          </div>

          {/* by Anthalora Text */}
          <div
            className="absolute left-[53.76px] top-[34.33px] flex h-[11px] w-[55px] items-center text-[9.07px] font-normal leading-[100%] tracking-[-0.005em] text-[#6d4148]"
            style={{ fontFamily: 'MonarchaW01-Regular, serif' }}
          >
            by Anthalora
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex h-[24px] items-center gap-[24px]">
          <button
            type="button"
            className="
              flex items-center gap-0
              border-0 bg-transparent p-0
              text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148]
            "
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            Clinic Services
            <svg
              className="h-[24px] w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
            </svg>
          </button>

          <a
            href="#group-skills"
            className="whitespace-nowrap text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline"
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            Group Skills Building
          </a>

          <a
            href="#school-partnerships"
            className="whitespace-nowrap text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline"
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            School Partnerships
          </a>

          <a
            href="#referrals"
            className="whitespace-nowrap text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline"
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            Referrals
          </a>

          <a
            href="#about"
            className="whitespace-nowrap text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline"
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            About Us
          </a>

          <a
            href="#contact"
            className="whitespace-nowrap text-[14px] font-light leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline"
            style={{ fontFamily: 'Sofia Pro, sans-serif' }}
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="
            flex h-[42px] min-w-[164px]
            shrink-0 items-center justify-center
            rounded-[22369600px]
            border-0 bg-[#63343d]
            px-[24px]
            text-[14px] font-medium
            leading-[100%] tracking-[0.2px] text-white
          "
          style={{ fontFamily: 'Sofia Pro, sans-serif' }}
        >
          Book a Consultation
        </button>
      </nav>
    </header>
  );
}