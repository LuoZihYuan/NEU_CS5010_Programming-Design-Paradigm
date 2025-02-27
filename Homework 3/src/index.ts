/**
 * @module Main
 */

import { CLI } from "./core/CLI.js";

/**
 * Main entry point of the application.
 */
const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  const path = args[0];
  await (await CLI.init(path)).start();
};

await main();
