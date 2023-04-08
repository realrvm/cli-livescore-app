#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getLiveScore } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printLiveScore,
} from "./services/log.service.js";
import {
  TOKEN_VALUE,
  setKeyValue,
  getKeyValue,
} from "./services/storage.service.js";

async function saveToken(token) {
  if (!token.length) {
    printError("No token provided");
    return;
  }
  try {
    await setKeyValue(TOKEN_VALUE.token, token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error.message);
  }
}

function getLiveResults() {
  console.log("getLiveResults");
  printLiveScore();
}

function initCLI() {
  const { h } = getArgs(process.argv);
  if (h) {
    return printHelp();
  }

  return getLiveResults();
}

initCLI();
