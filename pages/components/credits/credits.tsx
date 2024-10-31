import AccessibilityStatementLink from "../../AccessibilityStatement/accessibilityStatement";
import CustomButton from "../common/button/customButton";
import style from "./credits.module.scss";

const Credits: React.FC = () => {
  const { container, freepik, text, buttonLink } = style;
  return (
    <div className={container}>
      <div className={freepik}>
        <span className={text}>Designed by</span>
        <CustomButton
          type="text"
          className={buttonLink}
          size="small"
          rel="noopener noreferrer"
          href="https://www.freepik.com/"
        >
          Freepik
        </CustomButton>
      </div>
      <AccessibilityStatementLink />
    </div>
  );
};

export default Credits;
