import { ExtraSetInfoInterface, SetImageInterface } from "../interfaces/image";
import { LegalityInterface } from "../interfaces/legality.interface";
import { SetInterface } from "../interfaces/set.interface";

export class ExpansionModel {
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

  userTotalCards: string;

  // Could change
  bgSetImage: string;

  constructor(
    defaultSetData: SetInterface,
    extraSetInfo: ExtraSetInfoInterface,
  ) {
    this.id = defaultSetData.id;
    this.images = defaultSetData.images;
    this.legalities = defaultSetData.legalities;
    this.name = defaultSetData.name;
    this.printedTotal = defaultSetData.printedTotal;
    this.ptcgoCode = defaultSetData.ptcgoCode;
    this.releaseDate = defaultSetData.releaseDate;
    this.series = defaultSetData.series;
    this.total = defaultSetData.total;
    this.updatedAt = defaultSetData.updatedAt;
    this.bgSetImage = extraSetInfo.bgImage;
    this.userTotalCards = extraSetInfo.userTotalCards;
  }
}