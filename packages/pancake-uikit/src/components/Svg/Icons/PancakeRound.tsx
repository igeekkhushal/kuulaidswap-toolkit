import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
    <image href={'/images/pixel/LogoSm.gif'} width="96%" />
    </Svg>
  );
};

export default Icon;
