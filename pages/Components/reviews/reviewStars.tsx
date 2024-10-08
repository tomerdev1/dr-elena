import { cn } from "@/lib/utils";
import styles from "./reviewStars.module.scss";
import IconWrapper from "../common/icon/icon";
import Star from "@/public/assets/icons/reviews/star";
import { Icons } from "@/public/assets/icons/icons";

export type ReviewScore = 1 | 2 | 3 | 4 | 4.5 | 5;

interface Props {
  score: ReviewScore;
  classname?: string;
}

const ReviewStars: React.FC<Props> = ({ score, classname }) => {
  const { container, star, checked, half } = styles;
  return (
    <div className={cn(container, classname)}>
      {score >= 1 && (
        <IconWrapper
          icon={Icons.star}
          size={14}
          className={cn(star, score >= 1 ? checked : undefined)}
          fillColor={""}
        />
      )}
      {score >= 2 && (
        <IconWrapper
          icon={Icons.star}
          size={14}
          fillColor={""}
          className={cn(star, score >= 2 ? checked : undefined)}
        />
      )}
      {score >= 3 && (
        <IconWrapper
          icon={Icons.star}
          size={14}
          fillColor={""}
          className={cn(star, score >= 3 ? checked : undefined)}
        />
      )}
      {score >= 4 && (
        <IconWrapper
          icon={Icons.star}
          size={14}
          fillColor={""}
          className={cn(star, score >= 4 ? checked : undefined)}
        />
      )}
      {score >= 4.5 && (
        <IconWrapper
          icon={Icons.star}
          size={14}
          fillColor=""
          className={cn(
            star,
            score >= 5 ? checked : score >= 4.5 ? half : undefined
          )}
        />
      )}
    </div>
  );
};

export default ReviewStars;
