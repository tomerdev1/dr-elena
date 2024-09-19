import GetInTouch from "./components/getInTouch";
import Map from "./components/map";
import styles from "./contactUs.module.scss";

const ContactUs: React.FC = () => {
  const { contactUsContainer } = styles;
  return (
    <div className={contactUsContainer}>
      <GetInTouch />
      <Map />
    </div>
  );
};

export default ContactUs;
