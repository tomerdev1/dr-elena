import { useTranslation } from "react-i18next";
import styles from "./treatments.module.scss";
import Treatment from "./treatment";

interface TreatmentItem {
  title: string;
  body: string;
  id: number;
}

/*
0 = implants
1 = Rehabilitation
2 = Aesthetics
3 = Maintenance
*/

const Treatments: React.FC = () => {
  const { t } = useTranslation();
  const { treatmentsContainer, treatments, treatmentsTitle } = styles;
  const items = t("treatments.items", {
    returnObjects: true,
  }) as TreatmentItem[];

  return (
    <div className={treatmentsContainer}>
      <h2 className={treatmentsTitle}>{t("treatments.title")}</h2>
      <div className={treatments}>
        {Array.isArray(items) &&
          items.map((item) => (
            <Treatment
              id={item.id}
              key={item.title}
              title={item.title}
              body={item.body}
            />
          ))}
      </div>
    </div>
  );
};

export default Treatments;
