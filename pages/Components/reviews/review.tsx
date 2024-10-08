import styles from "./review.module.scss";
import variables from "@/styles/style.module.scss";
import ReviewStars, { ReviewScore } from "./reviewStars";
import IconWrapper from "../common/icon/icon";
import { cn } from "@/lib/utils";
import { Icons } from "@/public/assets/icons/icons";

type Props = {
  text: string;
  score: ReviewScore;
  lng: string;
};

const Review: React.FC<Props> = ({ score, text, lng }) => {
  const { container, bubble, bubbleRU, quote, bubbleContent, starRating } =
    styles;
  const CSS = {
    quoteColor: variables["primary-l"],
  };
  return (
    <div className={container}>
      {
        <div className={cn(bubble, lng == "ru" ? bubbleRU : "")}>
          <div className={quote}>
            <IconWrapper
              fillColor={CSS.quoteColor}
              icon={Icons.quote}
              size={24}
            />
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
