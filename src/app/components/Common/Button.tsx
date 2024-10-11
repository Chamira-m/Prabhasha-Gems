import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <>
      {/* For larger screens */}
      <div className="md:block hidden">
        <Link
          href={link}
          className="uppercase inline-block text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
                md:text-[9px] md:px-3 md:py-2
                lg:text-[11px] lg:px-4 lg:py-2.5
                xl:text-[13px] xl:px-4 xl:py-2
                2xl:text-[14px] 2xl:px-5 2xl:py-2
                3xl:text-[15px] 3xl:px-6 3xl:py-3
                4xl:text-[16px] 4xl:px-7 4xl:py-3.5"
        >
          {title}
        </Link>
      </div>

      {/* For smaller screens */}
      <div className="block md:hidden">
        <Link
          href={link}
          className="uppercase inline-block text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
            text-[6px] px-2 py-1
            xs:text-[7px] xs:px-2 xs:py-1
            sm:text-[8px] sm:px-3 sm:py-1.5"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default Button;
