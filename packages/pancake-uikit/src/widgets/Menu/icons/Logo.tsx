import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
  hrefLogoIcon?: string;
}

const Logo: React.FC<LogoProps> = ({ isDark, hrefLogoIcon, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <image width="160" height="26" href={hrefLogoIcon ? hrefLogoIcon : isDark ? '/images/pixel/LogoDark.gif' : '/images/pixel/LogoWhite.gif' }/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
