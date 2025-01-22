import { Attribute, AttributeName } from "@/types/api";

export const attributeNameMap: Record<AttributeName, string> = {
  Str: "Strength",
  Dex: "Dexterity",
  Arc: "Arcane",
  Int: "Intelligence",
  Fai: "Faith",
  "-": "N/A",
};

export const getAttributeDisplayName = (attributeName: AttributeName) =>
  attributeNameMap[attributeName];

export const getAttributeValue = (
  attributes: Attribute[],
  name: AttributeName,
): number | undefined => attributes.find((attr) => attr.name === name)?.amount;

export const getScaleValue = (
  attributes: Attribute[],
  name: AttributeName,
): number | undefined => attributes.find((attr) => attr.name === name)?.amount;
