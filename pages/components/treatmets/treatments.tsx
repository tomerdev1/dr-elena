import { useTranslation } from "react-i18next";
import styles from "./treatments.module.scss";
import Treatment from "./treatment";
import { FC, SVGProps } from "react";
import Aesthetics from "@/public/assets/icons/treatments/aesthetics";
import Implants2 from "@/public/assets/icons/treatments/implants2";
import Rehabilitation2 from "@/public/assets/icons/treatments/rehabilitation2";
import Maintenance from "@/public/assets/icons/treatments/maintenance";
import { Icons } from "@/public/assets/icons/icons";
import { LucideProps } from "lucide-react";

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
      <span className={treatmentsTitle}>{t("treatments.title")}</span>
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
