import { csvParse, csvFormat, DSVRowString } from "d3";
import { readFile, writeFile } from "node:fs/promises";
import { Listing, AirBnBDataHandler } from "./AirBnBDataHandler.js";

/**
 * Utility functions for file operations.
 */
export const FileUtil = {
  /**
   * Loads and parses CSV data from a file.
   *
   * @param {string} path - The file path to load.
   * @returns {Promise<Listing[]>} A promise that resolves to an array of Listing objects.
   */
  async load(path: string): Promise<Listing[]> {
    let raw_data = await readFile(path, "utf-8");
    raw_data = raw_data.replaceAll("N/A", "");
    const data = csvParse(raw_data);
    return data.map(
      (listing: DSVRowString<string>): Listing =>
        ({
          ...listing,
          last_scraped: new Date(listing.last_scraped),
          description: listing.description ? listing.description : undefined,
          neighborhood_overview: listing.neighborhood_overview
            ? listing.neighborhood_overview
            : undefined,
          host_since: new Date(listing.host_since),
          host_location: listing.host_location
            ? listing.host_location
            : undefined,
          host_about: listing.host_about ? listing.host_about : undefined,
          host_response_time: listing.host_response_time
            ? listing.host_response_time
            : undefined,
          host_response_rate: listing.host_response_rate
            ? parseInt(listing.host_response_rate) / 100
            : undefined,
          host_acceptance_rate: listing.host_acceptance_rate
            ? parseInt(listing.host_acceptance_rate) / 100
            : undefined,
          host_is_superhost: listing.host_is_superhost
            ? listing.host_is_superhost === "t"
            : undefined,
          host_neighbourhood: listing.host_neighbourhood
            ? listing.host_neighbourhood
            : undefined,
          host_listings_count: parseInt(listing.host_listings_count),
          host_total_listings_count: parseInt(
            listing.host_total_listings_count
          ),
          host_verifications: JSON.parse(
            // eslint-disable-next-line @stylistic/quotes
            listing.host_verifications.replaceAll("'", '"')
          ) as string[],
          host_has_profile_pic: listing.host_has_profile_pic === "t",
          host_identity_verified: listing.host_identity_verified === "t",
          neighbourhood: listing.neighbourhood
            ? listing.neighbourhood
            : undefined,
          neighbourhood_group_cleansed: listing.neighbourhood_group_cleansed
            ? listing.neighbourhood_group_cleansed
            : undefined,
          latitude: parseFloat(listing.latitude),
          longitude: parseFloat(listing.longitude),
          accommodates: parseInt(listing.accommodates),
          bathrooms: listing.bathrooms
            ? parseFloat(listing.bathrooms)
            : undefined,
          bathrooms_text: listing.bathrooms_text
            ? listing.bathrooms_text
            : undefined,
          bedrooms: listing.bedrooms ? parseInt(listing.bedrooms) : undefined,
          beds: listing.beds ? parseInt(listing.beds) : undefined,
          amenities: JSON.parse(listing.amenities) as string[],
          price: listing.price
            ? parseFloat(listing.price.replace("$", ""))
            : undefined,
          minimum_nights: parseInt(listing.minimum_nights),
          maximum_nights: parseInt(listing.maximum_nights),
          minimum_minimum_nights: listing.minimum_minimum_nights
            ? parseInt(listing.minimum_minimum_nights)
            : undefined,
          maximum_minimum_nights: listing.maximum_minimum_nights
            ? parseInt(listing.maximum_minimum_nights)
            : undefined,
          minimum_maximum_nights: listing.minimum_maximum_nights
            ? parseInt(listing.minimum_maximum_nights)
            : undefined,
          maximum_maximum_nights: listing.maximum_maximum_nights
            ? parseInt(listing.maximum_maximum_nights)
            : undefined,
          minimum_nights_avg_ntm: listing.minimum_nights_avg_ntm
            ? parseFloat(listing.minimum_nights_avg_ntm)
            : undefined,
          maximum_nights_avg_ntm: listing.maximum_nights_avg_ntm
            ? parseFloat(listing.maximum_nights_avg_ntm)
            : undefined,
          calendar_updated: listing.calendar_updated
            ? new Date(listing.calendar_updated)
            : undefined,
          has_availability: listing.has_availability
            ? listing.has_availability === "t"
            : undefined,
          availability_30: parseInt(listing.availability_30),
          availability_60: parseInt(listing.availability_60),
          availability_90: parseInt(listing.availability_90),
          availability_365: parseInt(listing.availability_365),
          calendar_last_scraped: new Date(listing.calendar_last_scraped),
          number_of_reviews: parseInt(listing.number_of_reviews),
          number_of_reviews_ltm: parseInt(listing.number_of_reviews_ltm),
          number_of_reviews_l30d: parseInt(listing.number_of_reviews_l30d),
          first_review: listing.first_review
            ? new Date(listing.first_review)
            : undefined,
          last_review: listing.last_review
            ? new Date(listing.last_review)
            : undefined,
          review_scores_rating: listing.review_scores_rating
            ? parseFloat(listing.review_scores_rating)
            : undefined,
          review_scores_accuracy: listing.review_scores_accuracy
            ? parseFloat(listing.review_scores_accuracy)
            : undefined,
          review_scores_cleanliness: listing.review_scores_cleanliness
            ? parseFloat(listing.review_scores_cleanliness)
            : undefined,
          review_scores_checkin: listing.review_scores_checkin
            ? parseFloat(listing.review_scores_checkin)
            : undefined,
          review_scores_communication: listing.review_scores_communication
            ? parseFloat(listing.review_scores_communication)
            : undefined,
          review_scores_location: listing.review_scores_location
            ? parseFloat(listing.review_scores_location)
            : undefined,
          review_scores_value: listing.review_scores_value
            ? parseFloat(listing.review_scores_value)
            : undefined,
          license: listing.license ? listing.license : undefined,
          instant_bookable: listing.instant_bookable === "t",
          calculated_host_listings_count: parseInt(
            listing.calculated_host_listings_count
          ),
          calculated_host_listings_count_entire_homes: parseInt(
            listing.calculated_host_listings_count_entire_homes
          ),
          calculated_host_listings_count_private_rooms: parseInt(
            listing.calculated_host_listings_count_private_rooms
          ),
          calculated_host_listings_count_shared_rooms: parseInt(
            listing.calculated_host_listings_count_shared_rooms
          ),
          reviews_per_month: listing.reviews_per_month
            ? parseFloat(listing.reviews_per_month)
            : undefined,
        }) as Listing
    );
  },

  /**
   * Saves data to a file.
   *
   * @param {string} path - The file path to save the data.
   * @param {string} data - The string data to write to the file.
   * @returns {Promise<void>} A promise that resolves when the file is written.
   */
  async save(path: string, handler: AirBnBDataHandler): Promise<void> {
    await writeFile(
      `${path}/listings(filtered).csv`,
      csvFormat(handler._listings!)
    );
    const description = Object.entries(handler.describe()).reduce(
      (
        desc: { [key: string]: number | string }[],
        [key, info]: [string, { [key: string]: number | string }]
      ): { [key: string]: number | string }[] => {
        info["feature"] = key;
        desc.push(info);
        return desc;
      },
      []
    );
    await writeFile(
      `${path}/description.csv`,
      csvFormat(description, [
        "feature",
        "count",
        "missing",
        "distinct",
        "mean",
        "std",
        "min",
        "25%",
        "50%",
        "75%",
        "max",
      ])
    );
    const hostrank = handler
      .computeSecond()
      .map(([id, count]) => ({ host_id: id, host_listings_count: count }));
    await writeFile(`${path}/host_rank.csv`, csvFormat(hostrank));
  },
};
