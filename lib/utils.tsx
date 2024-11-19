import IconWrapper from "@/pages/components/common/icon/icon";
import { Icons } from "@/public/assets/icons/icons";
import { ReactNode } from "react";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
export const getFlagIcon = (lng: string): ReactNode | null => {
  var icon;
  switch (lng) {
    case "he":
      icon = Icons.ilFlag;
      break;
    case "en":
      icon = Icons.usFlag;
      break;
    case "ru":
      icon = Icons.ruFlag;
      break;
  }
  return icon != null ? <IconWrapper size={32} icon={icon} /> : icon;
};
