import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const GOOGLE_MY_BUSINESS_API_URL = `https://mybusiness.googleapis.com/v4/accounts/${process.env.GOOGLE_ACCOUNT_ID}/locations/${process.env.GOOGLE_LOCATION_ID}/reviews`;
// const FACEBOOK_GRAPH_API_URL = `https://graph.facebook.com/v16.0/${process.env.FACEBOOK_POST_ID}/comments?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`;
// const INSTAGRAM_GRAPH_API_URL = `https://graph.facebook.com/v16.0/${process.env.INSTAGRAM_MEDIA_ID}/comments?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;

// Fetch Google Reviews
async function fetchGoogleReviews() {
  try {
    const response = await axios.get(GOOGLE_MY_BUSINESS_API_URL, {
      params: { key: process.env.GOOGLE_API_KEY },
    });
    return response.data.reviews;
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
}

// // Fetch Facebook Comments
// async function fetchFacebookComments() {
//   try {
//     const response = await axios.get(FACEBOOK_GRAPH_API_URL);
//     return response.data.data;  // Comments array
//   } catch (error) {
//     console.error('Error fetching Facebook comments:', error);
//     return [];
//   }
// }

// // Fetch Instagram Comments
// async function fetchInstagramComments() {
//   try {
//     const response = await axios.get(INSTAGRAM_GRAPH_API_URL);
//     return response.data.data;  // Comments array
//   } catch (error) {
//     console.error('Error fetching Instagram comments:', error);
//     return [];
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const googleReviews = await fetchGoogleReviews();
    // const facebookComments = await fetchFacebookComments();
    // const instagramComments = await fetchInstagramComments();

    res.status(200).json({
      googleReviews,
      // facebookComments,
      // instagramComments,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
}
