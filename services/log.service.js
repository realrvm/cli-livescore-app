import chalk from "chalk";
import dedent from "dedent-js";

const { bgRed, bgGreen, bgYellow, bgMagenta } = chalk;

export function printError(error) {
  console.log(`${bgRed("[ERROR]")}: ${error}`);
}

export function printSuccess(message) {
  console.log(`${bgGreen("[SUCCESS]")}: ${message}`);
}

export function printHelp() {
  console.log(dedent`${bgYellow("[HELP]")}:
                    -h prints this help
                    -v prints version
                    `);
}

export function printLiveScore(response) {
  const { data } = response;
  console.log(dedent`${bgMagenta("[LIVE SCORE]")}:
                    ${data.liveScore}
                    `);
}
