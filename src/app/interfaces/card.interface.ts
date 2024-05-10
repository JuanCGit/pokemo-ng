import { ancientTraitInterface } from "./ancient-trait.interface";
import { abilityInterface } from "./ability.interface";
import { attackInterface } from "./attack.interface";
import { weaknessInterface } from "./weakness.interface";
import { resistanceInterface } from "./resistance.interface";
import { setInterface } from "./set.interface";
import { legalityInterface } from "./legality.interface";
import { cardImageInterface } from "./image";
import { ITCGPlayerInterface } from "./tcgplayer.interface";
import { cardMarketInterface } from "./card-market.interface";

export interface cardInterface {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: ancientTraitInterface;
  abilities?: abilityInterface[];
  attacks?: attackInterface[];
  weaknesses?: weaknessInterface[];
  resistances?: resistanceInterface[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: setInterface;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: legalityInterface;
  regulationMark?: string;
  images: cardImageInterface;
  tcgplayer?: ITCGPlayerInterface;
  cardmarket?: cardMarketInterface;
}
