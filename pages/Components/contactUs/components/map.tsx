import useIsMobile from "@/hooks/useIsMobile";
import styles from "./map.module.scss";

const Map: React.FC = () => {
  const { mapContainer, mapPreview } = styles;
  const isMobile = useIsMobile();

  return (
    <div className={mapContainer}>
      <iframe
        className={mapPreview}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21647.915271812417!2d34.753487389418346!3d31.992679416995507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa30fb245a28e999%3A0x130ce1815686f74f!2sDr.%20Elena%20Dental%20aesthetic%20clinic!5e0!3m2!1sen!2sil!4v1726754971777!5m2!1sen!2sil"
        width="100%"
        height={isMobile ? "300px" : "100%"}
        loading="lazy"
      />
    </div>
  );
};

export default Map;
