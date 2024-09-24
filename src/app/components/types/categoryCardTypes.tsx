import { StaticImageData } from "next/image"; // Import StaticImageData

export type CategoryCardType = {
  id: number;
  image: StaticImageData | string;
  title: string;
};
