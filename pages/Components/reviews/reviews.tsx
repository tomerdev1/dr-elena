import { useTranslation } from "react-i18next";
import styles from "./reviews.module.scss";
import { Carousel } from "antd";
import CustomImage from "@/pages/components/common/image/customImage";
import i18n from "@/i18n";
import Review from "./review";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import reviewsData from "./reviewsData.json";
import { ReviewScore } from "./reviewStars";

const Reviews: React.FC = () => {
  const {
    container,
    title,
    colorsContainer,
    firstColor,
    secondColor,
    content,
    carousel,
    rootCousel,
    image,
    imageRtl,
    imageLtr,
    contentRtl,
    contentLtr,
    customDots,
  } = styles;
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const direction = i18n.dir();

  return (
    <div className={container}>
      <div className={colorsContainer}>
        <div className={firstColor}>
          <CustomImage
            src={"/assets/images/happyGirl.png"}
            className={cn(direction == "rtl" ? imageRtl : imageLtr, image)}
            width={0}
            height={isMobile ? 190 : 460}
            style={{
              width: "auto",
            }}
          />
        </div>

        <div className={secondColor}>
          <span className={title}>{t("reviews.title")}</span>
          <div
            className={cn(
              content,
              direction == "rtl" ? contentRtl : contentLtr
            )}
          >
            <Carousel
              autoplay
              autoplaySpeed={5000}
              dots={{ className: customDots }}
              arrows
              rootClassName={rootCousel}
              className={carousel}
            >
              {Array.isArray(reviewsData) &&
                reviewsData.map((reviewData) => (
                  <Review
                    text={reviewData.text}
                    score={reviewData.score as ReviewScore}
                    key={reviewData.text}
                    lng={reviewData.lng}
                  />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
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
