/**
 * Module for command line interface.
 * @module Cli
 */

import readline from "node:readline/promises";
import { FileUtil } from "./FileUtil.js";
import { AirBnBDataHandler } from "./AirBnBDataHandler.js";

/**
 * CLI commands for interacting with Airbnb data.
 */
export type Cli = {
  /**
   * Starts the interactive CLI.
   * @returns {Promise<void>} A promise that resolves when the CLI session ends.
   */
  start(): Promise<void>;

  /**
   * Applies filters to the listings based on user input.
   * @returns {Promise<void>} A promise that resolves once the filters are applied.
   */
  filter(): Promise<void>;

  /**
   * Displays basic statistics of the listings.
   * @returns {void}
   */
  stats(): void;

  /**
   * Displays the ranking of hosts based on the number of listings.
   * @returns {void}
   */
  hostRank(): void;

  /**
   * Describes the listings by computing column statistics.
   * @returns {void}
   */
  describe(): void;

  /**
   * Exports the current listings data to files.
   * @returns {Promise<void>} A promise that resolves when the export is complete.
   */
  export(): Promise<void>;

  /**
   * Exits the CLI application.
   * @returns {void}
   */
  exit(): void;
};

const indent = "";

/**
 * Starts the command line interface (CLI) for interacting with the AirBnB data.
 * @param {Listing[]} data - The listing data.
 */
const init = async (datapath?: string): Promise<Cli> => {
  console.log("\n[Load]");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const _question = async (q: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      rl.question(q)
        .then((str: string) => resolve(str.trim()))
        .catch((err: Error) => {
          reject(err);
        });
    });
  };

  let handler: AirBnBDataHandler | undefined;
  let path = datapath;
  while (!handler) {
    if (!datapath) {
      const load_prompt = `${indent}< Enter listings filepath or leave blank to use default path (./data/listings.csv): `;
      path = (await _question(load_prompt)) || "./data/listings.csv";
    }
    try {
      const data = await FileUtil.load(path!);
      handler = AirBnBDataHandler.init(data);
      console.log(`${indent}> Successfully loaded ${data.length} listings.`);
    } catch (error) {
      console.error(`${indent}> Error loading ${path}.`);
      console.error(`${indent}> ${error as Error}`);
    }
  }

  return {
    /**
     * Starts the interactive CLI.
     * @returns {Promise<void>} A promise that resolves when the CLI session ends.
     */
    async start(): Promise<void> {
      let exit = false;

      while (!exit) {
        console.log("\n[Menu]");
        const menu_prompt = `${indent}< Enter command (filter, stats, hostRank, describe, export, exit): `;
        const menu = await _question(menu_prompt);

        switch (menu) {
          case "filter":
            await this.filter();
            break;
          case "stats":
            this.stats();
            break;
          case "hostRank":
            this.hostRank();
            break;
          case "describe":
            this.describe();
            break;
          case "export":
            await this.export();
            break;
          case "exit":
            this.exit();
            exit = true;
            break;
        }
      }
    },

    /**
     * Applies filters to the listings based on user input.
     * @returns {Promise<void>} A promise that resolves once the filters are applied.
     */
    async filter(): Promise<void> {
      console.log("\n[Filter]");

      const filter_prompts = {
        price: `${indent}< Enter price range as min,max or leave blank: `,
        rooms: `${indent}< Enter range of number of rooms as min,max or leave blank: `,
        review_score: `${indent}< Enter range of review score as min,max or leave blank: `,
      };
      const condition = await Object.entries(filter_prompts).reduce(
        async (
          cond_promise: Promise<{ [key: string]: [number, number] }>,
          [key, str]: [string, string]
        ): Promise<{ [key: string]: [number, number] }> => {
          const cond = await cond_promise;
          const range = (await _question(str)).split(",").map(Number);
          if (range.length === 2) cond[key] = range as [number, number];
          return cond;
        },
        Promise.resolve({})
      );
      if (Object.keys(condition).length === 0) {
        console.log(`\n${indent}> No filters applied.`);
        return;
      }
      handler = handler!.filter(condition);
      console.log(`${indent}> Filter applied`);
    },

    /**
     * Displays basic statistics of the listings.
     * @returns {void}
     */
    stats(): void {
      console.log("\n[Stats]");
      const stats = handler!.computeFirst();
      console.log(`${indent}> Count: ${stats.count}`);
      console.log(
        `${indent}> Average Price Per Room: ${stats.avgPricePerRoom.toFixed(2)}`
      );
    },

    /**
     * Displays the ranking of hosts based on the number of listings.
     * @returns {void}
     */
    hostRank(): void {
      console.log("\n[HostRank]");
      const ranking = handler!.computeSecond();
      console.log(`${indent}> host_id, host_listings_count`);
      ranking.slice(0, 5).forEach((rank) => {
        console.log(`${indent}> ${rank[0]}, ${rank[1]}`);
      });
      console.log(`${indent}> ...`);
      ranking.slice(-5).forEach((rank) => {
        console.log(`${indent}> ${rank[0]}, ${rank[1]}`);
      });
      console.log(`${indent}>\n${indent}> (export to see all)`);
    },

    /**
     * Describes the listings by computing column statistics.
     * @returns {void}
     */
    describe(): void {
      console.log("\n[Describe]");
      const statistics = handler!.describe();
      Object.entries(statistics).forEach(([col, info]) => {
        console.log(
          `${indent}> ${col}: ${JSON.stringify(info)
            .replaceAll(/"/g, "")
            .replaceAll(/([:,])/g, "$1 ")
            .replaceAll(/(\.\d{2})\d*,/g, "$1")}`
        );
      });
    },

    /**
     * Exports the current listings data to files.
     * @returns {Promise<void>} A promise that resolves when the export is complete.
     */
    async export(): Promise<void> {
      console.log("\n[Export]");
      const export_prompt = `${indent}< Enter folder path for export or leave blank to use default path (./data/): `;
      const filePath = (await _question(export_prompt)) || "./data/";
      await FileUtil.save(filePath, handler!);
      console.log(
        `${indent}> Successfully exported to \`${filePath}/listings(filtered).csv\` .`
      );
      console.log(
        `${indent}> Successfully exported to \`${filePath}/host_rank.csv\` .`
      );
      console.log(
        `${indent}> Successfully exported to \`${filePath}/description.csv\` .`
      );
    },

    /**
     * Exits the CLI application.
     * @returns {void}
     */
    exit(): void {
      rl.close();
    },
  } as Cli;
};

export const Cli = {
  init,
};
