import {
  ExtraExpansionInfoInterface,
  SetImageInterface,
} from "../interfaces/image";
import {
  LegalityEnum,
  LegalityInterface,
} from "../interfaces/legality.interface";
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

  userAcquiredCards: number;

  // Could change
  bgSetImage: string;

  constructor(
    defaultSetData: SetInterface,
    extraSetInfo: ExtraExpansionInfoInterface,
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
    this.userAcquiredCards = extraSetInfo.userTotalCards;
  }
}

export const ExpansionModelMock = new ExpansionModel(
  {
    id: "12",
    images: { logo: "/assets/images/example-over-image.png", symbol: "" },
    legalities: {
      expanded: LegalityEnum.LEGAL,
      standard: LegalityEnum.BANNED,
      unlimited: LegalityEnum.BANNED,
    },
    name: "",
    printedTotal: 0,
    ptcgoCode: "",
    releaseDate: "",
    series: "",
    total: 0,
    updatedAt: "",
  },
  { bgImage: "/assets/images/example-home-banner.jpg", userTotalCards: 15 },
);