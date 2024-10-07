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
    <div className="bg-[#FFFFFF] rounded-xl shadow-md xs:w-[150px] xs:h-52 sm:w-44 sm:h-56 md:w-36 md:h-48 lg:w-[200px] lg:h-[320px] xl:w-[250px] xl:h-[350px] 2xl:w-[288px] 2xl:h-[393px] flex flex-col items-center justify-center ">
      <Image
        className="object-cover xs:w-36 xs:h-36 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-72 2xl:h-72 rounded-t-xl"
        src={image}
        alt={title}
        width={500}
        height={300}
        layout="fixed"
        objectFit="cover"
        loading="lazy"
      />
      <div className="xs:p-1 sm:p-1 md:p-2 lg:p-2 xl:p-3">
        <h1 className="text-blueGray text-[9px] md:text-[9px] lg:text-[14px] xl:text-[17px]  text-center font-mulish-semiBold">
          {title}
        </h1>
        <h1 className="text-darkMint text-[9px] md:text-[9px] lg:text-[14px] xl:text-[17px] text-center font-mulish-semiBold">
          LKR {price}
        </h1>
      </div>
    </div>
  );
};

export default SingleProductCard;
