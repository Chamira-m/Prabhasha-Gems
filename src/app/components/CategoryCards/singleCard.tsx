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
          className="object-cover h-6 w-6 lg:w-16 lg:h-16"
          src={image}
          alt={title}
          width={100}
          height={100}
          layout="fixed" /* Use fixed to maintain the given dimensions */
          objectFit="cover"
          loading="lazy"
        />
        <h2 className="font-bold text-blueGray uppercase lg:text-2xl text-sm">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SingleCard;
