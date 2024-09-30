import { StaticImageData } from "next/image"; // Import StaticImageData

export type singleProductcardType = {
  id: number;
  image: StaticImageData | string;
  title: string;
  price: string;
};
