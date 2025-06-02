import { StaticImageData } from "next/image";

export type card_data_prop_type = {
  id: string,
  img: string | StaticImageData,
  brand: string,
  model: string,
  year: number,
  price: number,
  color: string,
  status: string,
  mileage: number,
  fuelType: "برقی" | "بنزینی" | "گازسوز" | "هیبرید",
  transmission: string,
  engine: string,
}