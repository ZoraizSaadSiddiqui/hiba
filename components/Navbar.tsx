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
          border-white
          bg-[linear-gradient(90deg,#FCEFDD_80%,#FCEFDDCC_100%,#F5E2CB80_50%)]
          px-[24.5px]
          py-[12.5px]
          shadow-[0_36px_72px_-30px_rgba(90,41,50,0.3),0_12px_28px_-14px_rgba(90,41,50,0.2)]
        "
      >
        {/* Logo */}
        {/* Logo */}
<div className="relative flex h-[45.33px] w-[109.78px] shrink-0 items-center">

  {/* Symbol */}
  <div className="absolute left-0 top-1/2 h-[28.5px] w-[28.26px] -translate-y-1/2">
    <img
      src="/Group.png"
      alt=""
      className="h-full w-full object-contain"
    />
  </div>

  {/* Hiba + by Anthalora Group */}
  <div className="absolute left-[34px] top-1/2 flex h-[45.33px] w-[75.78px] -translate-y-1/2 flex-col justify-center">
    
    {/* Hiba */}
    <div className="font-monarcha m-0 h-[32px] w-[75.78px] text-[32px] font-normal leading-[100%] tracking-[0%] text-[#6d4148]">
      Hiba
    </div>

    {/* by Anthalora */}
    <div className="font-monarcha ml-[19.76px] h-[11px] w-[55px] text-[10px] font-normal leading-[100%] tracking-[-0.005em] text-[#6d4148]">
      by Anthalora
    </div>

  </div>
</div>
        {/* Navigation List */}
        <div className="flex h-[24px] flex-1 items-center justify-center gap-[4px]">
          <a
            href="#clinic-services"
            className="flex items-center gap-0 whitespace-nowrap rounded-full border-0 bg-transparent px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
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
          </a>

          <a
            href="#group-skills"
            className="whitespace-nowrap rounded-full px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
          >
            Group Skills Building
          </a>

          <a
            href="#school-partnerships"
            className="whitespace-nowrap rounded-full px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
          >
            School Partnerships
          </a>

          <a
            href="#referrals"
            className="whitespace-nowrap rounded-full px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
          >
            Referrals
          </a>

          <a
            href="#about"
            className="whitespace-nowrap rounded-full px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
          >
            About Us
          </a>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full px-[12px] py-[6px] font-sofia text-[16px] font-normal leading-[100%] tracking-[0.2px] text-[#6d4148] no-underline transition-all duration-300 ease-in-out hover:text-[#613339] hover:text-[14px] hover:font-[400] hover:leading-[100%] hover:tracking-[0.2px]"
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="
            font-sofia
            flex
            h-[42px]
            min-w-[164px]
            shrink-0
            items-center
            justify-center
            rounded-[22369600px]
            border-0
            bg-[#63343d]
            px-[24px]
            text-[18px]
            font-medium
            leading-[100%]
            tracking-[0.2px]
            text-white
          "
        >
          Book a Consultation
        </button>
      </nav>
    </header>
  );
}