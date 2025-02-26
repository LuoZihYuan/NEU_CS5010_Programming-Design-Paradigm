/**
 * @module Main
 */

import { startCLI } from "./core/CLI.js";
import { FileUtil } from "./core/FileUtil.js";

/**
 * Main entry point of the application.
 * Expects the CSV file path as a command line parameter.
 */
const main = async (): Promise<void> => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: node index.js <path_to_csv_file>");
    process.exit(1);
  }
  const csvFile = args[0];
  try {
    const data = await FileUtil.load(csvFile);
    console.log(`Loaded ${data.length} listings from ${csvFile}`);
    await startCLI(data);
  } catch (error) {
    console.error("Error loading file:", error);
  }
};

await main();
