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

export const Skeleton = styled(SkeletonBackground)`
  width: 12rem;
  height: 12rem;
`

export const WhiteBackground = styled.div`

  width: 100%;
  height: 20vh;
`
export const LoadingEffect = () => {

  return <WhiteBackground><Skeleton /></WhiteBackground>
}
