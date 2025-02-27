/* eslint-disable @stylistic/indent */

/**
 * Module for handling Airbnb data operations.
 * @module AirBnBDataHandler
 */

/**
 * Represents an Airbnb listing.
 *
 * @property {string} id - Unique identifier for the listing.
 * @property {string} listing_url - URL of the listing page.
 * @property {string} scrape_id - Identifier for the scraping process.
 * @property {Date} last_scraped - Date when the listing was last scraped.
 * @property {string} source - Source of the listing data.
 * @property {string} name - Name or title of the listing.
 * @property {string | undefined} description - Description of the listing.
 * @property {string | undefined} neighborhood_overview - Overview of the neighborhood.
 * @property {string} picture_url - URL to the main picture of the listing.
 * @property {string} host_id - Unique identifier for the host.
 * @property {string} host_url - URL of the host's profile.
 * @property {string} host_name - Name of the host.
 * @property {Date} host_since - Date when the host started hosting.
 * @property {string | undefined} host_location - Location of the host.
 * @property {string | undefined} host_about - About section describing the host.
 * @property {string | undefined} host_response_time - Typical response time of the host.
 * @property {number | undefined} host_response_rate - Host's response rate as a percentage.
 * @property {number | undefined} host_acceptance_rate - Host's acceptance rate as a percentage.
 * @property {boolean | undefined} host_is_superhost - Indicates whether the host is a superhost.
 * @property {string} host_thumbnail_url - URL to the host's thumbnail image.
 * @property {string} host_picture_url - URL to the host's profile picture.
 * @property {string | undefined} host_neighbourhood - Neighbourhood where the host is located.
 * @property {number} host_listings_count - Count of listings the host has.
 * @property {number} host_total_listings_count - Total count of listings by the host across all platforms.
 * @property {string[]} host_verifications - List of verification methods for the host.
 * @property {boolean} host_has_profile_pic - Indicates if the host has a profile picture.
 * @property {boolean} host_identity_verified - Indicates if the host's identity has been verified.
 * @property {string | undefined} neighbourhood - Neighbourhood where the listing is located.
 * @property {string} neighbourhood_cleansed - Cleaned version of the neighbourhood name.
 * @property {string | undefined} neighbourhood_group_cleansed - Grouped cleaned version of the neighbourhood name.
 * @property {number} latitude - Latitude coordinate of the listing.
 * @property {number} longitude - Longitude coordinate of the listing.
 * @property {string} property_type - Type of property (e.g., Apartment, House).
 * @property {string} room_type - Type of room offered (e.g., Entire home, Private room).
 * @property {number} accommodates - Maximum number of people the listing accommodates.
 * @property {number | undefined} bathrooms - Number of bathrooms in the listing.
 * @property {string | undefined} bathrooms_text - Textual description of the bathroom(s).
 * @property {number | undefined} bedrooms - Number of bedrooms in the listing.
 * @property {number | undefined} beds - Number of beds available in the listing.
 * @property {string[]} amenities - List of amenities provided with the listing.
 * @property {number | undefined} price - Price per night for the listing.
 * @property {number} minimum_nights - Minimum number of nights required for a booking.
 * @property {number} maximum_nights - Maximum number of nights allowed for a booking.
 * @property {number | undefined} minimum_minimum_nights - Minimum value of minimum nights across listings.
 * @property {number | undefined} maximum_minimum_nights - Maximum value of minimum nights across listings.
 * @property {number | undefined} minimum_maximum_nights - Minimum value of maximum nights across listings.
 * @property {number | undefined} maximum_maximum_nights - Maximum value of maximum nights across listings.
 * @property {number | undefined} minimum_nights_avg_ntm - Average of minimum nights in non-time-based metric.
 * @property {number | undefined} maximum_nights_avg_ntm - Average of maximum nights in non-time-based metric.
 * @property {Date | undefined} calendar_updated - Date when the booking calendar was last updated.
 * @property {boolean | undefined} has_availability - Indicates whether the listing currently has availability.
 * @property {number} availability_30 - Number of days available in the next 30 days.
 * @property {number} availability_60 - Number of days available in the next 60 days.
 * @property {number} availability_90 - Number of days available in the next 90 days.
 * @property {number} availability_365 - Number of days available in the next 365 days.
 * @property {Date} calendar_last_scraped - Date when the calendar was last scraped.
 * @property {number} number_of_reviews - Total number of reviews for the listing.
 * @property {number} number_of_reviews_ltm - Number of reviews in the last 12 months.
 * @property {number} number_of_reviews_l30d - Number of reviews in the last 30 days.
 * @property {Date | undefined} first_review - Date when the first review was posted.
 * @property {Date | undefined} last_review - Date when the most recent review was posted.
 * @property {number | undefined} review_scores_rating - Average rating score of the listing.
 * @property {number | undefined} review_scores_accuracy - Accuracy rating score from reviews.
 * @property {number | undefined} review_scores_cleanliness - Cleanliness rating score from reviews.
 * @property {number | undefined} review_scores_checkin - Check-in rating score from reviews.
 * @property {number | undefined} review_scores_communication - Communication rating score from reviews.
 * @property {number | undefined} review_scores_location - Location rating score from reviews.
 * @property {number | undefined} review_scores_value - Value rating score from reviews.
 * @property {string | undefined} license - License information for the listing, if applicable.
 * @property {boolean} instant_bookable - Indicates if the listing supports instant booking.
 * @property {number} calculated_host_listings_count - Calculated total number of listings by the host.
 * @property {number} calculated_host_listings_count_entire_homes - Calculated count of the host's entire home listings.
 * @property {number} calculated_host_listings_count_private_rooms - Calculated count of the host's private room listings.
 * @property {number} calculated_host_listings_count_shared_rooms - Calculated count of the host's shared room listings.
 * @property {number | undefined} reviews_per_month - Average number of reviews per month for the listing.
 */
export type Listing = {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: Date;
  source: string;
  name: string;
  description?: string;
  neighborhood_overview?: string;
  picture_url: string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: Date;
  host_location?: string;
  host_about?: string;
  host_response_time?: string;
  host_response_rate?: number;
  host_acceptance_rate?: number;
  host_is_superhost?: boolean;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood?: string;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
  host_has_profile_pic: boolean;
  host_identity_verified: boolean;
  neighbourhood?: string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed?: string;
  latitude: number;
  longitude: number;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms?: number;
  bathrooms_text?: string;
  bedrooms?: number;
  beds?: number;
  amenities: string[];
  price?: number;
  minimum_nights: number;
  maximum_nights: number;
  minimum_minimum_nights?: number;
  maximum_minimum_nights?: number;
  minimum_maximum_nights?: number;
  maximum_maximum_nights?: number;
  minimum_nights_avg_ntm?: number;
  maximum_nights_avg_ntm?: number;
  calendar_updated?: Date;
  has_availability?: boolean;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: Date;
  number_of_reviews: number;
  number_of_reviews_ltm: number;
  number_of_reviews_l30d: number;
  first_review?: Date;
  last_review?: Date;
  review_scores_rating?: number;
  review_scores_accuracy?: number;
  review_scores_cleanliness?: number;
  review_scores_checkin?: number;
  review_scores_communication?: number;
  review_scores_location?: number;
  review_scores_value?: number;
  license?: string;
  instant_bookable: boolean;
  calculated_host_listings_count: number;
  calculated_host_listings_count_entire_homes: number;
  calculated_host_listings_count_private_rooms: number;
  calculated_host_listings_count_shared_rooms: number;
  reviews_per_month?: number;
};

/**
 * Represents statistical information for a column.
 *
 * @property {number} count - The number of entries in the column.
 * @property {number} distinct - The number of distinct values in the column.
 * @property {number} missing - The number of missing entries in the column.
 * @property {number | undefined} mean - The mean of the column values (if numeric).
 * @property {number | undefined} std - The standard deviation of the column values (if numeric).
 * @property {number | undefined} min - The minimum value in the column (if numeric).
 * @property {number | undefined} 25% - The 25th percentile of the column values (if numeric).
 * @property {number | undefined} 50% - The 50th percentile (median) of the column values (if numeric).
 * @property {number | undefined} 75% - The 75th percentile of the column values (if numeric).
 * @property {number | undefined} max - The maximum value in the column (if numeric).
 */
export type ColumnInfo = {
  count: number;
  distinct: number;
  missing: number;
  mean?: number;
  std?: number;
  min?: number;
  "25%"?: number;
  "50%"?: number;
  "75%"?: number;
  max?: number;
};

/**
 * Interface for handling Airbnb data operations.
 *
 * @property {Listing[] | undefined} _listings - Array of listings, or undefined if not initialized.
 */
export type AirBnBDataHandler = {
  _listings: Listing[] | undefined;

  /**
   * Filters listings based on provided criteria.
   *
   * @param {object} params - Object containing filter criteria.
   * @param {[number, number]} [params.price] - Optional tuple for price range.
   * @param {[number, number]} [params.rooms] - Optional tuple for room count range.
   * @param {[number, number]} [params.review_score] - Optional tuple for review score range.
   * @returns {AirBnBDataHandler} A new instance of AirBnBDataHandler with the filtered listings.
   */
  filter({
    price,
    rooms,
    review_score,
  }: {
    price?: [number, number];
    rooms?: [number, number];
    review_score?: [number, number];
  }): AirBnBDataHandler;

  /**
   * Compute the number of listings, and their average price per number of rooms.
   *
   * @returns {{[key: string]: number}}} An object containing statistics such as the count of listings and average price per room.
   */
  computeFirst(): { [key: string]: number };

  /**
   * Compute number of listings per host, and rank by number of listings.
   *
   * @returns {[string, number][]} An object representing the sorted list of hosts by number of listings.
   */
  computeSecond(): [string, number][];

  /**
   * Describes the listings by computing column statistics.
   *
   * @returns {{ [key: string]: ColumnInfo }} An object mapping each column name to its statistical information.
   */
  describe(): { [key: string]: ColumnInfo };
};

/**
 * Initializes an instance of AirBnBDataHandler.
 *
 * @param listings - Optional array of listings.
 * @returns A new instance of AirBnBDataHandler.
 */
const init = (listings?: Listing[]): AirBnBDataHandler => ({
  _listings: listings,

  /**
   * Filters listings based on provided criteria.
   *
   * @param {object} params - Object containing filter criteria.
   * @param {[number, number]} [params.price] - Optional tuple for price range.
   * @param {[number, number]} [params.rooms] - Optional tuple for room count range.
   * @param {[number, number]} [params.review_score] - Optional tuple for review score range.
   * @returns {AirBnBDataHandler} A new instance of AirBnBDataHandler with the filtered listings.
   */
  filter({
    price,
    rooms,
    review_score,
  }: {
    price?: [number, number];
    rooms?: [number, number];
    review_score?: [number, number];
  }) {
    if (!this._listings) throw Error("Pass in listings");
    const that = AirBnBDataHandler.init();
    that._listings = this._listings;
    that._listings = price
      ? that._listings.filter(
          (listing) =>
            listing.price &&
            listing.price >= price[0] &&
            listing.price <= price[1]
        )
      : that._listings;
    that._listings = rooms
      ? that._listings.filter(
          (listing) =>
            listing.price &&
            listing.price >= rooms[0] &&
            listing.price <= rooms[1]
        )
      : that._listings;
    that._listings = review_score
      ? that._listings.filter(
          (listing) =>
            listing.review_scores_rating &&
            listing.review_scores_rating >= review_score[0] &&
            listing.review_scores_rating <= review_score[1]
        )
      : that._listings;
    return that;
  },

  /**
   * Compute the number of listings, and their average price per number of rooms.
   *
   * @returns {{ [key: string]: number }} An object containing statistics such as the count of listings and average price per room.
   */
  computeFirst(): { [key: string]: number } {
    const count = this._listings ? this._listings.length : 0;
    const bedroom_prices = this._listings
      ? this._listings
          .filter((listing) => listing.price && listing.bedrooms)
          .map((listing) => listing.price! / listing.bedrooms!)
      : [0];
    const avgPricePerRoom =
      bedroom_prices.reduce((acc, curr) => acc + curr) / bedroom_prices.length;

    return { count, avgPricePerRoom };
  },

  /**
   * Compute number of listings per host, and rank by number of listings.
   *
   * @returns {[string, number][]} An object representing the sorted list of hosts by number of listings.
   */
  computeSecond(): [string, number][] {
    if (!this._listings) {
      throw Error("No listings");
    }
    const avgListingsByHost = this._listings.reduce(
      (
        host: { [key: string]: number },
        listing: Listing
      ): { [key: string]: number } => {
        host[listing.host_id] = host[listing.host_id] || 0;
        host[listing.host_id] += 1;
        return host;
      },
      {}
    );
    return Object.entries(avgListingsByHost).sort((a, b) => b[1] - a[1]);
  },

  /**
   * Describes the listings by computing column statistics.
   *
   * @returns {{ [key: string]: ColumnInfo }} An object mapping each column name to its statistical information.
   */
  describe(): { [key: string]: ColumnInfo } {
    if (!this._listings) {
      throw Error("No listings");
    }
    const statistics = this._listings.reduce(
      (
        stats: {
          [key: string]: (string | number | Date | boolean | string[])[];
        },
        listing: Listing
      ): { [key: string]: (string | number | Date | boolean | string[])[] } => {
        Object.entries(listing).forEach(([key, value]) => {
          if (value === undefined) return;
          stats[key] = stats[key] || [];
          if (!["String", "Number", "Boolean"].includes(value.constructor.name))
            stats[key].push(value.toString());
          else stats[key].push(value);
        });
        return stats;
      },
      {}
    );
    return Object.entries(statistics).reduce(
      (
        stats: { [key: string]: ColumnInfo },
        [key, values]: [string, (string | number | boolean | Date | string[])[]]
      ): { [key: string]: ColumnInfo } => {
        if (values[0].constructor.name !== "Number") {
          stats[key] = {
            count: values.length,
            distinct: new Set(values).size,
            missing: this._listings!.length - values.length,
          };
          return stats;
        }
        const temp = values.toSorted() as number[];
        const mean =
          (values.reduce(
            (acc, curr) => (acc as number) + (curr as number),
            0
          ) as number) / values.length;
        stats[key] = {
          count: values.length,
          distinct: new Set(values).size,
          missing: this._listings!.length - values.length,
          mean: mean,
          std: Math.sqrt(
            values.reduce(
              (acc, curr) => ((curr as number) - mean) ** 2 + (acc as number),
              0
            ) as number
          ),
          min: temp[0],
          "25%":
            (temp[Math.floor(values.length * 0.25)] +
              temp[Math.ceil(values.length * 0.25)]) /
            2,
          "50%":
            (temp[Math.floor(values.length * 0.5)] +
              temp[Math.ceil(values.length * 0.5)]) /
            2,
          "75%":
            (temp[Math.floor(values.length * 0.75)] +
              temp[Math.ceil(values.length * 0.75)]) /
            2,
          max: temp[temp.length - 1],
        };
        return stats;
      },
      {}
    );
  },
});

export const AirBnBDataHandler = {
  init,
};
