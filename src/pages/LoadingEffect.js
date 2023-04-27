import React from "react";
import styled, {keyframes} from "styled-components";



const placeHolderShimmer = keyframes`

  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }

`

const PulseAnimation = keyframes`

  0% {
    background-position: 0% 0%
  }
  100% {
    background-position: -135% 0%
  }
`

const SkeletonBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: #eeeeee;
  background-image: -webkit-gradient(linear, left center, right center, from(#f6f7f8), color-stop(.2, #edeef1), color-stop(.4, #f6f7f8), to(#f6f7f8));
  background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
`

export const SkeletonMock = styled(SkeletonBackground)`
  width: 12rem;
  height: 12rem;
`

export const Pulse = styled.div`
  //$from: #f5f5f5;
  //$to: scale-color($from, $lightness: -10%);
  background: #f5f5f5;
  height: 20rem;
  width: 20rem;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  animation: ${PulseAnimation} 1.2s ease-in-out infinite;
`
export const WhiteBackground = styled.div`

  width: 100%;
  height: 80vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`



export const LoadingEffect = () => {

  return <WhiteBackground><Pulse /></WhiteBackground>
}
