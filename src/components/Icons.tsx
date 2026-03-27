import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMicrophone,
  faWandMagicSparkles,
  faComments,
  faPalette,
  faShieldHalved,
  faGlobe,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faLinux,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

interface IconProps {
  icon: IconDefinition;
  size?: SizeProp;
  className?: string;
}

export function Icon({ icon, size = "lg", className }: IconProps) {
  return <FontAwesomeIcon icon={icon} size={size} className={className} />;
}

/* Re-export FA icons so consumers import from one place */
export {
  faWindows,
  faLinux,
  faAndroid,
  faMicrophone,
  faWandMagicSparkles,
  faComments,
  faPalette,
  faShieldHalved,
  faGlobe,
  faDownload,
};
