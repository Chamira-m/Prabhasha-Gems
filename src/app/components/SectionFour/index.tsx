import React from "react";
import Image from "next/image";
import ImageOne from "../../../public/images/home/section4.png";
import Link from "next/link";

function SectionFour() {
  return (
    <>
      <div className="md:block hidden mt-3 mb-2">
        <div className="grid grid-cols-2 ">
          <Image
            className=" w-full md:h-[280px] lg:h-[400px] xl:h-[490px]"
            src={ImageOne}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <div className="text-center md:mt-7 lg:mt-9 xl:mt-14">
            <h2 className="uppercase md:text-[20px] lg:text-[24px] xl:text-[40px] font-bold text-blueGray text-right font-mulish-semiBold">
              Elevate Every Occasion with
            </h2>
            <h2 className="uppercase md:text-[20px] lg:text-[24px] xl:text-[40px] text-darkMint text-right font-mulish-extraBold">
              Timeless Gifts
            </h2>
            <p className="md:text-[10px] lg:text-[14px] xl:text-base text-blueGray text-justify mt-2 font-mulish-lightItalic ml-4">
              Make every celebration unforgettable with our collection of
              timeless gifts. Thoughtfully curated and beautifully crafted, each
              piece is designed to elevate any occasion, turning special moments
              into cherished memories. Whether its for a loved one or a personal
              keepsake, our gifts bring lasting joy and elegance to life’s most
              meaningful events. With quality that endures and beauty that
              captivates, find the perfect gift to express your heart and leave
              a lasting impression.
            </p>
            <div className="md:mt-2  lg:mt-5 xl:mt-8 flex justify-center">
              <Link
                href="/about"
                className="uppercase font-mulish-semiBold md:w-[100px] md:h-[24px] lg:w-[110px] lg:h-[28px] xl:w-[143px] xl:h-[32px] outline bg-white text-center py-1 font-semibold md:text-[9px] lg:text-[11px] xl:text-[15px] text-lightGray "
              >
                EXPLORE GIFTS
              </Link>
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
        <div className=" w-screen bg-lightMint mt-3 py-3">
          <div className="grid grid-cols-2 px-5">
            <Image
              className=" w-full xs:h-[140px] sm:h-[160px]"
              src={ImageOne}
              alt="ImageOne"
              width={500}
              height={300}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
            <div>
              <p className="xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 font-mulish-lightItalic ml-2">
                Make every celebration unforgettable with our collection of
                timeless gifts. Thoughtfully curated and beautifully crafted,
                each piece is designed to elevate any occasion, turning special
                moments into cherished memories. Whether its for a loved one or
                a personal keepsake, our gifts bring lasting joy and elegance to
                life’s most meaningful events. With quality that endures and
                beauty that captivates, find the perfect gift to express your
                heart and leave a lasting impression.
              </p>
              <div className="mt-2 flex justify-self-stretch ml-2">
                <Link
                  href="/about"
                  className="uppercase font-mulish-semiBold xs:w-[70px] xs:h-[18px] outline bg-lightMint text-center py-1 font-semibold xs:text-[7px] sm:text-[9px] text-blueGray "
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
