import { spaceOnString } from "./spaceOnString";

export function numberPad(stringNumbers: string) {
  const newString = stringNumbers
    .split(", ")
    .map((element) => element.toString().padStart(2, "0"))
    .toString();
  return spaceOnString(newString);
}
