import React from "react";
import { singleProductcardType } from "../types/singleProductcardType";
import Im1 from "../../../public/images/home/sectionTwo/section21.png";
import Im2 from "../../../public/images/home/sectionTwo/section22.png";
import Im3 from "../../../public/images/home/sectionTwo/section23.png";
import Im4 from "../../../public/images/home/sectionTwo/section24.png";
import Im5 from "../../../public/images/home/sectionTwo/section25.png";
import Im6 from "../../../public/images/home/sectionTwo/section26.png";
import Im7 from "../../../public/images/home/sectionTwo/section27.png";
import Im8 from "../../../public/images/home/sectionTwo/section28.png";
import SingleProductCard from "../Common/SingleProductCard";
import Link from "next/link";

function SectionTwo() {
  const singleProdutData: singleProductcardType[] = [
    {
      id: 1,
      image: Im1,
      title: "Ceylon Royal Blue Sapphire 3ct Pear Shaped Natural",
      price: "153,990",
    },
    {
      id: 2,
      image: Im2,
      title: "Ceylon Cornflower Blue Sapphire Cushion Shaped 4.35ct Heated",
      price: "153,990",
    },
    {
      id: 3,
      image: Im3,
      title: "Mozambique Ruby 2.34ct Oval Shaped Natural ",
      price: "153,990",
    },
    {
      id: 4,
      image: Im4,
      title: "Yellow Sapphire 6.23cts Emerald Shape Heated",
      price: "153,990",
    },
    {
      id: 5,
      image: Im5,
      title: "Pink Sapphire 4.45ct Cushion Shaped Natural",
      price: "153,990",
    },
    {
      id: 6,
      image: Im6,
      title: "Yellow Sapphire 2ct Round Shape Heated",
      price: "153,990",
    },
    {
      id: 7,
      image: Im7,
      title: "Ceylon Royal Blue Sapphire 1ct pair | Round Shape Heated ",
      price: "153,990",
    },
    {
      id: 8,
      image: Im8,
      title: "Hot Pink Sapphire 2ct Round Shape Heated",
      price: "153,990",
    },
  ];
  const limitedProducts = singleProdutData.slice(0, 8);
  const limitedProductsMobile = singleProdutData.slice(0, 4);

  return (
    <>
      <div className="md:block hidden mt-5">
        <h1 className="uppercase md:text-[28px] lg:text-[36px] xl:text-[40px] text-blueGray text-center font-mulish-semiBold">
          The Art of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Gemstones,
          </span>
          The Majesty of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Sapphires.
          </span>{" "}
        </h1>
        <p className="md:text[12px] lg:text-[16px] xl:text-base text-blueGray text-center mt-2 mb-4 font-mulish-lightItalic">
          Discover the true artistry of gemstones and the unmatched majesty of
          Ceylons finest sapphires. Each piece in our collection is a
          celebration of nature’s brilliance, expertly crafted to reveal the
          vibrant colors and clarity that define exceptional quality. From the
          rich soils of Ceylon to your collection, our sapphires and gemstones
          are treasures that captivate the eye and elevate your style. Embrace
          the elegance and timeless beauty that only the finest gemstones can
          offer.
        </p>
        <div className="grid grid-cols-4 md:gap-3 lg:gap-3 xl:gap-4">
          {limitedProducts.map((product) => (
            <SingleProductCard
              key={product.id}
              singleProductcardType={product}
            />
          ))}
        </div>
        <div className="mt-8 mb-5 flex justify-center">
          <Link
            href="/about"
            className="uppercase inline-block px-4 py-2 text-center font-mulish-semiBold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
            md:text-[10px] md:px-4 md:py-2
            lg:text-[12px] lg:px-5 lg:py-2.5
            xl:text-[15px] xl:px-6 xl:py-3"
          >
            {" "}
            FIND MORE SAPPHIRES
          </Link>
        </div>
      </div>
      <div className="block md:hidden mt-2">
        <h1 className="uppercase xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          The Art of{" "}
          <span className="text-darkMint font-mulish-extraBold">
            Gemstones,
          </span>{" "}
        </h1>
        <h1 className="uppercase xs:text-[17px] sm:text-[19px] text-blueGray text-left font-mulish-semiBold">
          The Majesty of
          <span className="text-darkMint font-mulish-extraBold">
            {" "}
            Sapphires.
          </span>
        </h1>
        <p className="xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 mb-4 font-mulish-lightItalic">
          Discover the true artistry of gemstones and the unmatched majesty of
          Ceylons finest sapphires. Each piece in our collection is a
          celebration of nature’s brilliance, expertly crafted to reveal the
          vibrant colors and clarity that define exceptional quality. From the
          rich soils of Ceylon to your collection, our sapphires and gemstones
          are treasures that captivate the eye and elevate your style. Embrace
          the elegance and timeless beauty that only the finest gemstones can
          offer.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-7 mt-2">
            {limitedProductsMobile.map((product) => (
              <SingleProductCard
                key={product.id}
                singleProductcardType={product}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 mb-5 flex justify-center">
          <Link
            href="/about"
            className="uppercase inline-block px-4 py-2 text-center font-mulish-semibold text-lightGray border border-lightGray hover:bg-lightGray hover:text-white transition-colors duration-300 ease-in-out
            xs:text-[7px] xs:px-2 xs:py-1
            sm:text-[8px] sm:px-3 sm:py-1.5
          "
          >
            FIND MORE SAPPHIRES
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
