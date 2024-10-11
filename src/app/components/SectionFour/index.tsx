import React from "react";
import Image from "next/image";
import ImageOne from "../../../public/images/home/section4.png";
import Link from "next/link";

function SectionFour() {
  return (
    <>
      <div className="md:block hidden mt-3 mb-2 lg:-mx-10 -mx-5">
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-lightMint h-4/5"></div>
          <div className="relative grid grid-cols-2 md:mx-5 lg:mx-10 xl:mx-11 2xl:mx-12 3xl:mx-14 4xl:mx-16">
            <Image
              className="w-full md:h-[280px] lg:h-[400px] xl:h-[450px] 2xl:h-[470px] 3xl:h-[550px] 4xl:h-[600px] "
              src={ImageOne}
              alt="ImageOne"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
            />
            <div className="text-center md:mt-7 lg:mt-9 xl:mt-14">
              <h2 className="uppercase md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[40px] 4xl:text-[44px] font-bold text-blueGray text-right font-mulish-semiBold">
                Elevate Every Occasion with
              </h2>
              <h2 className="uppercase md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[40px] 4xl:text-[44px] text-darkMint text-right font-mulish-extraBold">
                Timeless Gifts
              </h2>
              <p className="md:text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] 4xl:text-[22px] text-blueGray text-justify md:mt-1 lg:mt-1 xl:mt-2 font-mulish-lightItalic ml-4">
                Make every celebration unforgettable with our collection of
                timeless gifts. Thoughtfully curated and beautifully crafted,
                each piece is designed to elevate any occasion, turning special
                moments into cherished memories. Whether its for a loved one or
                a personal keepsake, our gifts bring lasting joy and elegance to
                lifes most meaningful events. With quality that endures and
                beauty that captivates, find the perfect gift to express your
                heart and leave a lasting impression.
              </p>
              <div className="md:mt-2 lg:mt-3 xl:mt-7 2xl:mt-9 flex justify-center">
                <Link
                  href="/about"
                  className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold  text-blueGray border border-blueGray hover:bg-blueGray  hover:text-white transition-colors duration-300 ease-in-out 
            md:text-[9px] md:px-3 md:py-2
                lg:text-[11px] lg:px-4 lg:py-2.5
                xl:text-[13px] xl:px-4 xl:py-2
                2xl:text-[14px] 2xl:px-5 2xl:py-2
                3xl:text-[15px] 3xl:px-6 3xl:py-3
                4xl:text-[16px] 4xl:px-7 4xl:py-3.5"
                >
                  EXPLORE GIFTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mt-5 mb-2">
        <h2 className="uppercase xs:text-[17px] sm:text-[19px] font-bold text-blueGray text-center font-mulish-semiBold">
          Elevate Every Occasion with
        </h2>
        <h2 className="uppercase xs:text-[17px] sm:text-[19px] text-darkMint text-center font-mulish-extraBold">
          Timeless Gifts
        </h2>
        <div className="-mx-5 bg-lightMint mt-3 py-3">
          <div className="grid grid-cols-2 px-5">
            <Image
              className="w-full h-[110px] xs:h-[140px] sm:h-[160px]"
              src={ImageOne}
              alt="ImageOne"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
            />
            <div>
              <p className="text-[5px] xs:text-[7px] sm:text-[9px] text-blueGray text-justify mt-2 font-mulish-lightItalic ml-2">
                Make every celebration unforgettable with our collection of
                timeless gifts. Thoughtfully curated and beautifully crafted,
                each piece is designed to elevate any occasion, turning special
                moments into cherished memories. Whether its for a loved one or
                a personal keepsake, our gifts bring lasting joy and elegance to
                lifes most meaningful events. With quality that endures and
                beauty that captivates, find the perfect gift to express your
                heart and leave a lasting impression.
              </p>
              <div className="mt-2 flex justify-self-stretch ml-2">
                <Link
                  href="/about"
                  className="uppercase inline-block text-center font-mulish-semiBold border bg-lightMint text-blueGray border-blueGray hover:bg-blueGray hover:text-white transition-colors duration-300 ease-in-out
                    text-[6px] px-2 py-1
            xs:text-[7px] xs:px-2 xs:py-1
            sm:text-[8px] sm:px-3 sm:py-1.5"
                >
                  EXPLORE GIFTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;
