import React from "react";
import { singleProductcardType } from "../types/singleProductcardType";
import single from "../../../public/images/home/singleCard1.png";
import SingleProductCard from "../Common/SingleProductCard";
import Image from "next/image";
import ImageOne from "../../../public/images/home/section11.png";
import ImageTwo from "../../../public/images/home/section12.png";
import Link from "next/link";

const SectionOne = () => {
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
  const limitedProducts = singleProdutData.slice(0, 4);
  const limitedProductsMobile = singleProdutData.slice(0, 2);

  return (
    <>
      <div className="lg:block hidden w-full ">
        <div className="grid grid-cols-2">
          <div>
            <div className="grid grid-cols-2 gap-4">
              {limitedProducts.map((product) => (
                <SingleProductCard
                  key={product.id}
                  singleProductcardType={product}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/about"
                className="w-[140px] h-[40px] text-[15px] outline bg-white p-2 text-center font-semibold text-lightGray "
              >
                Explore More
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-[40px] font-bold text-blueGray text-right font-mulish-black">
              SHINE WITH CONFIDENCE
            </h2>
            <h2 className="text-[40px] text-darkMint text-right font-mulish-semiBold">
              SPARKLE WITH QUALITY
            </h2>
            <p className="text-base text-blueGray text-justify mt-2 font-mulish-lightItalic">
              we believe that jewellery is more than just an accessory; its a
              reflection of your inner confidence and unique style. Each piece
              in our collection is carefully crafted from the finest gemstones
              and materials, ensuring that every detail meets the highest
              standards of quality. When you wear our jewellery, you don’t just
              wear a beautiful adornment — you carry a legacy of craftsmanship,
              integrity, and timeless elegance. Discover the brilliance that
              complements your confidence, and let every piece you wear tell a
              story of unparalleled quality.
            </p>
            <Image
              className=" w-full h-[281px] mt-10"
              src={ImageOne}
              alt="ImageOne"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
            <Image
              className=" w-full h-[281px] mt-3"
              src={ImageTwo}
              alt="ImageTwo"
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <h2 className="text-[17x] font-mulish-black text-blueGray text-center">
          SHINE WITH CONFIDENCE
        </h2>
        <h2 className="text-[17px] text-darkMint text-center font-mulish-semiBold">
          SPARKLE WITH QUALITY
        </h2>
        <p className="text-[8px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
          we believe that jewellery is more than just an accessory; its a
          reflection of your inner confidence and unique style. Each piece in
          our collection is carefully crafted from the finest gemstones and
          materials, ensuring that every detail meets the highest standards of
          quality. When you wear our jewellery, you don’t just wear a beautiful
          adornment — you carry a legacy of craftsmanship, integrity, and
          timeless elegance. Discover the brilliance that complements your
          confidence, and let every piece you wear tell a story of unparalleled
          quality.
        </p>
        <div className="flex justify-center flex-wrap gap-7 mt-2">
          {limitedProductsMobile.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="w-[67px] h-[20px] outline bg-white text-center p-1 font-semibold text-[7px] text-lightGray "
          >
            Explore More
          </Link>
        </div>
        <Image
          className="w-full h-[127px] mt-5"
          src={ImageOne}
          alt="ImageOne"
          width={100}
          height={100}
          layout="fixed"
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SectionOne;
