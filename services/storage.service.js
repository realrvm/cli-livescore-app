import { homedir } from "node:os";
import { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";

import { isPathExists } from "../helpers/path.js";

const file_path = join(homedir(), ".livescore.json");

export const TOKEN_VALUE = {
  token: "token",
};

export async function setKeyValue(key, value) {
  let data = {};
  if (await isPathExists(file_path)) {
    const file = await readFile(file_path, "utf8");
    data = JSON.parse(file);
  }
  Reflect.set(data, key, value);
  await writeFile(file_path, JSON.stringify(data));
}

export async function getKeyValue(key) {
  if (await isPathExists(file_path)) {
    const file = await readFile(file_path, "utf8");
    return Reflect.get(JSON.parse(file), key);
  }
  return;
}
