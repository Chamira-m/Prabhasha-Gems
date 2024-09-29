import React from "react";
import Image from "next/image";
import Section3 from "../../../public/images/home/section3.png";
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
            src={Section3}
            alt="ImageOne"
            width={100}
            height={100}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
          <div className="text-center">
            <h2 className="md:text-[18px] lg:text-[30px] xl:text-[40px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint md:text-[18px] lg:text-[30px] xl:text-[40px] font-mulish-extraBold">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="md:text-[18px] lg:text-[30px] xl:text-[40px] text-darkBlue font-mulish-semiBold gap-4">
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
                className="md:w-[140px] md:h-[24px] lg:w-[180px] lg:h-[30px] xl:w-[230px] xl:h-[36px] md:text-[9px] lg:text-[12px] xl:text-[15px] outline bg-white text-center md:p-1 lg:p-2 font-semibold  text-lightGray "
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
              src={Section3}
              alt="ImageOne"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 text-left ml-2">
            <h2 className="text-[17px] text-darkBlue font-mulish-semiBold">
              <span className="text-darkMint text-[17px] font-mulish-extraBold ">
                Fine Jewelry
              </span>
              <span> for Life’s</span>
            </h2>
            <h2 className="text-[17px] text-darkBlue font-mulish-semiBold gap-4">
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
            className="w-[120px] h-[18px] outline bg-white text-center p-1 font-semibold text-[7px] text-lightGray "
          >
            FIND MORE FINE JEWELRY
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
