import styles from "./review.module.scss";
import variables from "@/styles/style.module.scss";
import ReviewStars, { ReviewScore } from "./reviewStars";
import IconWrapper from "../common/icon/icon";
import Quote from "@/public/assets/icons/reviews/quote";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  score: ReviewScore;
  lng: string;
};

const Review: React.FC<Props> = ({ score, text, lng }) => {
  const { container, bubble, quote, bubbleContent, starRating } = styles;
  const CSS = {
    quoteColor: variables["primary-l"],
  };
  return (
    <div className={container}>
      {
        <div className={bubble}>
          <div className={quote}>
            <IconWrapper fillColor={CSS.quoteColor} icon={Quote} size={24} />
          </div>
          <div
            className={cn(bubbleContent)}
            style={{ direction: lng == "he" ? "rtl" : "ltr" }}
          >
            <ReviewStars classname={starRating} score={score} />
            <span> {text}</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Review;
