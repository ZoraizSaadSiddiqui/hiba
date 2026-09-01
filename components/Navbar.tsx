'use client';

export default function Navbar() {
  return (
    <nav
      className="
        mx-auto
        flex
        h-[70.33px]
        w-[1240px]
        items-center
        rounded-[22369600px]
        border-[0.5px]
        border-[rgba(255,255,255,0.5)]
        bg-[linear-gradient(90deg,rgba(252,239,221,1),rgba(252,239,221,0.8))]
        px-[24px]
        py-[12px]
        shadow-[0_36px_72px_-30px_rgba(90,41,50,0.3),0_12px_28px_-14px_rgba(90,41,50,0.2)]
      "
    >
      {/* Logo */}
      <img
        src="logo.jpg"
        alt="Hiba"
        className="h-auto w-[105px] shrink-0"
      />

      {/* Navigation */}
      <div className="ml-auto flex items-center gap-[28px]">
        <button
          type="button"
          className="
            flex items-center gap-[7px]
            border-0 bg-transparent p-0
            font-['Manrope'] text-[11px] font-medium
            leading-[100%] text-[#6d4148]
          "
        >
          Clinic Services
          <span className="h-0 w-0 border-x-[4px] border-x-transparent border-t-[5px] border-t-[#6d4148]" />
        </button>

        <a
          href="#group-skills"
          className="whitespace-nowrap font-['Manrope'] text-[11px] font-medium leading-[100%] text-[#6d4148] no-underline"
        >
          Group Skills Building
        </a>

        <a
          href="#school-partnerships"
          className="whitespace-nowrap font-['Manrope'] text-[11px] font-medium leading-[100%] text-[#6d4148] no-underline"
        >
          School Partnerships
        </a>

        <a
          href="#referrals"
          className="whitespace-nowrap font-['Manrope'] text-[11px] font-medium leading-[100%] text-[#6d4148] no-underline"
        >
          Referrals
        </a>

        <a
          href="#about"
          className="whitespace-nowrap font-['Manrope'] text-[11px] font-medium leading-[100%] text-[#6d4148] no-underline"
        >
          About Us
        </a>

        <a
          href="#contact"
          className="whitespace-nowrap font-['Manrope'] text-[11px] font-medium leading-[100%] text-[#6d4148] no-underline"
        >
          Contact
        </a>

        <button
          type="button"
          className="
            flex h-[42px] min-w-[124px]
            items-center justify-center
            rounded-[22369600px]
            border-0 bg-[#63343d]
            px-[18px]
            font-['Manrope'] text-[11px] font-semibold
            leading-[100%] text-white
          "
        >
          Book a Consultation
        </button>
      </div>
    </nav>
  );
}