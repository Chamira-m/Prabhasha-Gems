import React from "react";
import Image from "next/image";
import { singleProductcardType } from "../types/singleProductcardType";

const SingleProductCard = ({
  singleProductcardType,
}: {
  singleProductcardType: singleProductcardType;
}) => {
  const { image, title, price } = singleProductcardType;

  return (
    <div className="bg-white rounded-xl shadow-md w-40 h-52 md:w-36 md:h-48 lg:w-[200px] lg:h-[320px] xl:w-[288px] xl:h-[393px] flex flex-col items-center justify-center">
      <Image
        className="object-cover w-36 h-36 md:w-56 md:min-h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72"
        src={image}
        alt={title}
        width={100}
        height={100}
        layout="fixed"
        objectFit="cover"
        loading="lazy"
      />
      <h1 className="text-blueGray text-[9px] md:text-[9px] lg:text-[14px] xl:text-[17px]  text-center font-mulish-semiBold">
        {title}
      </h1>
      <h1 className="text-darkMint text-[9px] md:text-[9px] lg:text-[14px] xl:text-[17px] text-center font-mulish-semiBold">
        LKR {price}
      </h1>
    </div>
  );
};

export default SingleProductCard;
