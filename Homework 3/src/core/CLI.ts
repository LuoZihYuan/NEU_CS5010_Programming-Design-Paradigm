/**
 * @module CLI
 */

import readline from "readline";
import { FileUtil } from "./FileUtil.js";
import { AirBnBDataHandler, Listing } from "./AirBnBDataHandler.js";

/**
 * Starts the command line interface (CLI) for interacting with the AirBnB data.
 * @param {Listing[]} data - The listing data.
 * @returns {Promise<void>}
 */
export const startCLI = async (data: Listing[]): Promise<void> => {
  const handler = AirBnBDataHandler.init(data);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  /**
   * Promisified readline.question.
   * @param {string} query - The query to display.
   * @returns {Promise<string>} The user’s input.
   */
  const question = (query: string): Promise<string> => {
    return new Promise<string>((resolve) => {
      rl.question(`${query}`, resolve);
    });
  };

  let exit = false;
  while (!exit) {
    const command = await question(
      "Enter command (filter, stats, hostRank, describe, export, exit): "
    );
    switch (command.trim()) {
      case "filter": {
        const priceInput = await question(
          "Enter price range as min,max or leave blank: "
        );
        const roomsInput = await question(
          "Enter range of number of rooms as min,max or leave blank: "
        );
        const reviewInput = await question(
          "Enter range of minimum review score as min,max or leave blank: "
        );
        const criteria: {
          price?: [number, number];
          rooms?: [number, number];
          review_score?: [number, number];
        } = {};
        if (priceInput) {
          const [min, max] = priceInput.split(",").map(Number);
          criteria.price = [min, max];
        }
        if (roomsInput) {
          const [min, max] = priceInput.split(",").map(Number);
          criteria.rooms = [min, max];
        }
        if (reviewInput) {
          const [min, max] = priceInput.split(",").map(Number);
          criteria.review_score = [min, max];
        }
        handler.filter(criteria);
        console.log("Filter applied.");
        break;
      }
      case "stats": {
        const stats = handler.computeFirst();
        console.log("Statistics:");
        console.log(`Count: ${stats.count}`);
        console.log(
          `Average Price Per Room: ${stats.avgPricePerRoom.toFixed(2)}`
        );
        break;
      }
      case "hostRank": {
        const ranking = handler.computeSecond();
        console.log("Host Listings Ranking:");
        ranking.forEach((rank) => {
          console.log(`Host ${rank[0]}: ${rank[1]} listing(s)`);
        });
        break;
      }
      case "describe": {
        const statistics = handler.describe();
        console.log("Descriptive Statistics:");
        console.log(statistics);
        break;
      }
      case "export": {
        const filePath = await question("Enter output file path: ");
        await FileUtil.save(
          filePath,
          handler.computeFirst(),
          handler.computeSecond(),
          handler.describe()
        );
        console.log("Export completed.");
        break;
      }
      case "exit": {
        exit = true;
        break;
      }
      default:
        console.log("Unknown command.");
    }
  }
  rl.close();
};
