import type { NextApiRequest, NextApiResponse } from "next";

type GooglePlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

type GooglePlacesResponse = {
  result: {
    reviews: GooglePlaceReview[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { placeId } = req.query;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return res.status(400).json({ error: "Missing placeId or API key" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data: GooglePlacesResponse = await response.json();

    if (data.result) {
      res.status(200).json(data.result.reviews);
    } else {
      res.status(404).json({ error: "No reviews found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
}
