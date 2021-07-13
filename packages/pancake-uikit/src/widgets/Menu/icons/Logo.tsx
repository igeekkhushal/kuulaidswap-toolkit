import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <text y="20" className="logoText">KuulaidSwap</text>
      <image width="260" height="26" href={isDark ? '/images/pixel/LogoDark.gif' : '/images/pixel/LogoWhite.gif'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
