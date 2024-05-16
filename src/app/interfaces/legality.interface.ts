export enum LegalityEnum {
  LEGAL = "Legal",
  BANNED = "Banned",
}

export interface LegalityInterface {
  expanded: LegalityEnum | undefined;
  standard: LegalityEnum | undefined;
  unlimited: LegalityEnum | undefined;
}