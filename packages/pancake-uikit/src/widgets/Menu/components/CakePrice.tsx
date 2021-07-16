import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
  cakeBelowIcon?: string;
  cakeBelowIconClassName?: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const ImageSideBarDown = styled.img`
width: 24px;
margin-right: 8px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd, cakeBelowIcon, cakeBelowIconClassName }) => {
  return cakePriceUsd ? (
    <PriceLink href="https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      {/* <PancakeRoundIcon width="24px" mr="8px" /> */}
      {
        cakeBelowIcon ? (<ImageSideBarDown className={cakeBelowIconClassName ? cakeBelowIconClassName : ""} src={cakeBelowIcon} alt="cake below icon" />) : <PancakeRoundIcon width="24px" mr="8px" />
      }
      
      <Text color="lightgreen" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
