/**
 * Module for main entry
 * @module Main
 */

import { Cli } from "./core/Cli.js";

/**
 * Main entry point of the application.
 */
const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  const path = args[0];
  await (await Cli.init(path)).start();
};

await main();
