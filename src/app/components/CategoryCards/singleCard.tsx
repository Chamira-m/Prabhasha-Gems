import React from "react";
import Image from "next/image";
import { CategoryCardType } from "../types/categoryCardTypes";

const SingleCard = ({
  categoryCardType,
}: {
  categoryCardType: CategoryCardType;
}) => {
  const { image, title } = categoryCardType;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      {/* Using flexbox to align image and text in one row */}
      <div className="flex items-center space-x-4">
        <Image
          className="object-cover xs:h-6 xs:w-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          src={image}
          alt={title}
          width={100}
          height={100}
          layout="fixed" /* Use fixed to maintain the given dimensions */
          objectFit="cover"
          loading="lazy"
        />
        <h2 className="font-mulish-semiBold text-blueGray uppercase xs:text-[10px] sm:text-xs md:text-sm lg:text-[14px] xl:text-xl ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SingleCard;
