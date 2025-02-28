# Homework 3

## Usage

### Prerequsites

1. Have `pnpm` installed. Follow the [official documents](https://pnpm.io/installation) if you have not.

### Installation

In your command line:

1. Clone the repository to your machine, and `cd` into it.
2. Execute `pnpm install; pnpm build;`

### Test it out

You have two ways:

1. Enter filepath with prompt: `pnpm start` (same as `node dist/index.js`)
2. Enter filepath upfront: `node dist/index.js [filepath]`

## Video Demonstration

Watch on [YouTube](https://youtu.be/9jAyiZalTvY)

## Counter Examples

|  Model  | Version | Prompt                                                                                                                                               | Attachment                      |
| :-----: | :-----: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ChatGPT |   4o    | Now I will provide the code I write. Do not say anything until I give further commands.                                                              | All the codes that I've written |
| ChatGPT |   4o    | In my code, I demonstrated the use of pure functions and higher order functions. Now give me a similar code as counter examples of the two concepts. | -                               |

### Pure Functions

The following example mutates the \_listings property, making the function impure.

```typescript
filter({
  price,
  rooms,
  review_score,
}: {
  price?: [number, number];
  rooms?: [number, number];
  review_score?: [number, number];
}) {
  if (!this._listings) throw Error("No listings available.");

  // Directly modifying the instance (impure)
  if (price) {
    this._listings = this._listings.filter(
      (listing) => listing.price && listing.price >= price[0] && listing.price <= price[1]
    );
  }
  if (rooms) {
    this._listings = this._listings.filter(
      (listing) => listing.bedrooms && listing.bedrooms >= rooms[0] && listing.bedrooms <= rooms[1]
    );
  }
  if (review_score) {
    this._listings = this._listings.filter(
      (listing) => listing.review_scores_rating &&
        listing.review_scores_rating >= review_score[0] &&
        listing.review_scores_rating <= review_score[1]
    );
  }

  console.log("Listings updated!"); // Side effect (bad)
}
```

### Higher-Order Functions

The following example uses for loops instead of higher-order functions, such as `map()`, `reduce()`, and `filter()`.

```typescript
describe() {
  if (!this._listings) {
    throw Error("No listings available.");
  }

  const statistics: { [key: string]: any[] } = {};
  for (const listing of this._listings) {
    for (const key in listing) {
      if (listing[key] === undefined) continue;
      if (!statistics[key]) {
        statistics[key] = [];
      }
      statistics[key].push(listing[key]);
    }
  }

  const result: { [key: string]: ColumnInfo } = {};

  for (const key in statistics) {
    const values = statistics[key];
    if (typeof values[0] !== "number") {
      result[key] = {
        count: values.length,
        distinct: new Set(values).size,
        missing: this._listings.length - values.length,
      };
    } else {
      values.sort((a, b) => (a as number) - (b as number));
      const mean = values.reduce((acc, curr) => acc + (curr as number), 0) / values.length;
      result[key] = {
        count: values.length,
        distinct: new Set(values).size,
        missing: this._listings.length - values.length,
        mean: mean,
        std: Math.sqrt(values.reduce((acc, curr) => ((curr as number) - mean) ** 2 + acc, 0)),
        min: values[0],
        "25%": values[Math.floor(values.length * 0.25)],
        "50%": values[Math.floor(values.length * 0.5)],
        "75%": values[Math.floor(values.length * 0.75)],
        max: values[values.length - 1],
      };
    }
  }

  return result;
}
```

## Documentation

|  Model  | Version | Prompt                                                                                                              | Attachment                      |
| :-----: | :-----: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ChatGPT |   4o    | Generate TSDoc when I provide my code to you. Do not quote the entire code I provided, only include the signatures. | All the codes that I've written |

[Document Webpage](./docs/index.html)
(Download and view it in your browser.)
