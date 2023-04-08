import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export function getArgs(params) {
  return yargs(hideBin(params)).argv;
}
