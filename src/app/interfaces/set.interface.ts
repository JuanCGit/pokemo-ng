import { setImageInterface } from "./image";
import { legalityInterface } from "./legality.interface";

export interface setInterface {
  id: string;
  images: setImageInterface;
  legalities: legalityInterface;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}
