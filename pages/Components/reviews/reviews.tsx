import { useTranslation } from "react-i18next";
import styles from "./reviews.module.scss";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

const Reviews: React.FC = () => {
  const { container } = styles;
  const { t } = useTranslation();

  return <div className={container}></div>;
};

export default Reviews;

// const [reviews, setReviews] = useState<Review[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchReviews = async (placeId: string) => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           `/api/fetchGoogleReviews?placeId=${placeId}`
//         );

//         // Check if the response is okay
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         // Check if response body is empty
//         const text = await response.text();
//         if (!text) {
//           throw new Error("Empty response from the server.");
//         }

//         // Try parsing the response
//         const data = JSON.parse(text);

//         // Check if data has valid reviews
//         if (data && Array.isArray(data)) {
//           setReviews(data);
//         } else {
//           setError("No reviews found");
//         }
//       } catch (err: any) {
//         console.error("Failed to fetch reviews:", err);
//         setError(err.message || "Failed to fetch reviews");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (placeId) {
//       fetchReviews(placeId);
//     }
//   }, [placeId]);

//   if (loading) {
//     return <div>Loading reviews...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

// <div>
//       <h3>Business Reviews</h3>
//       {reviews.length > 0 ? (
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index}>
//               <p>
//                 <strong>{review.author_name}</strong> ({review.rating} stars)
//               </p>
//               <p>{review.text}</p>
//               <p>{review.relative_time_description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews found</p>
//       )}
//     </div>
