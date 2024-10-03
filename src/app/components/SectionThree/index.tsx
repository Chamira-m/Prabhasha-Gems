import React from "react";
import Image from "next/image";
import Section31 from "../../../public/images/home/section31.png";
import SingleProductCard from "../Common/SingleProductCard";
import { singleProductcardType } from "../types/singleProductcardType";
import single from "../../../public/images/home/singleCard1.png";
import Link from "next/link";

function SectionThree() {
  const singleProdutData: singleProductcardType[] = [
    {
      id: 1,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
    {
      id: 2,
      image: single,
      title: "Blue Sapphire White Gold earrings ",
      price: "153,990",
    },
    {
      id: 3,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
    {
      id: 4,
      image: single,
      title: "Blue Sapphire White Gold earrings",
      price: "153,990",
    },
  ];
  const limitedProducts = singleProdutData.slice(0, 2);
  return (
    <>
      <div className="md:block hidden w-full mb-2">
        {" "}
        <div className="grid grid-cols-2">
          <Image
            className="md:w-full md:h-[400px] lg:w-full lg:h-[600px] xl:w-full xl:h-[770px] px-3"
            src={Section31}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <div className="text-center">
            <h2 className="uppercase md:text-[18px] lg:text-[30px] xl:text-[40px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint md:text-[18px] lg:text-[30px] xl:text-[40px] font-mulish-extraBold">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="uppercase md:text-[18px] lg:text-[30px] xl:text-[40px] text-darkBlue font-mulish-semiBold gap-4">
              Finest Moments
            </h2>
            <div className=" flex justify-between flex-wrap ml-10 lg:mt-3 xl:mt-4">
              {limitedProducts.map((product) => (
                <SingleProductCard
                  key={product.id}
                  singleProductcardType={product}
                />
              ))}
            </div>
            <p className="md:text-[10px] lg:text-[12px] xl:text-[16px] text-blueGray text-justify md:mt-2 lg:mt-6 xl:mt-10 font-mulish-lightItalic">
              Celebrate life’s most precious moments with our exquisite fine
              jewelry. Each piece is thoughtfully designed and meticulously
              crafted to honor the milestones that matter most. Whether it’s a
              timeless gift or a personal treasure, our fine jewelry captures
              the essence of elegance and grace, making every moment
              unforgettable. Embrace the luxury and beauty that define life’s
              finest moments.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/about"
                className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
                md:text-[10px] md:px-4 md:py-2
                lg:text-[12px] lg:px-5 lg:py-2.5
                xl:text-[15px] xl:px-6 xl:py-3"
              >
                FIND MORE FINE JEWELRY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Image
              className=" w-full h-[147px]"
              src={Section31}
              alt="ImageOne"
              width={500}
              height={300}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 text-left ml-2">
            <h2 className="uppercase text-[17px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint text-[17px] font-mulish-extraBold ">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="uppercase text-[17px] text-darkBlue font-mulish-semiBold gap-4">
              Finest Moments
            </h2>
            <p className="text-[8px] text-blueGray mt-3 text-justify font-mulish-lightItalic">
              Celebrate life’s most precious moments with our exquisite fine
              jewelry. Each piece is thoughtfully designed and meticulously
              crafted to honor the milestones that matter most. Whether it’s a
              timeless gift or a personal treasure, our fine jewelry captures
              the essence of elegance and grace, making every moment
              unforgettable. Embrace the luxury and beauty that define life’s
              finest moments.
            </p>
          </div>
        </div>
        <div className=" flex justify-center flex-wrap mt-4 gap-7">
          {limitedProducts.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center mb-2">
          <Link
            href="/about"
            className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
            xs:text-[7px] xs:px-2 xs:py-1
            sm:text-[8px] sm:px-3 sm:py-1.5
            "
          >
            FIND MORE FINE JEWELRY
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
