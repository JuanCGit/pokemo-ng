import { SetImageInterface } from "./image";
import { LegalityInterface } from "./legality.interface";

export interface SetInterface {
  id: string;
  images: SetImageInterface;
  legalities: LegalityInterface;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}