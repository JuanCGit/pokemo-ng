export enum LegalityEnum {
  LEGAL = "Legal",
  BANNED = "Banned",
}

export interface legalityInterface {
  expanded: LegalityEnum | undefined;
  standard: LegalityEnum | undefined;
  unlimited: LegalityEnum | undefined;
}
