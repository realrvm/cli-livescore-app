import { stat } from "node:fs/promises";

export async function isPathExists(path) {
  try {
    await stat(path);
    return true;
  } catch (e) {
    return false;
  }
}
