import { Component, ReactNode } from "react";
import { StyledVectorCard } from "./styles";
export default class VectorCard extends Component {
  render(): ReactNode {
    return (
      <StyledVectorCard>
        <svg
          width="280"
          height="420"
          viewBox="0 0 280 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M140 140C140 101.34 171.34 70 210 70C248.66 70 280 101.34 280 140V280H240C184.772 280 140 235.228 140 180V140Z"
            fill="#66E2DC"
          />
          <rect x="70" y="70" width="70" height="70" rx="35" fill="#FCFAF9" />
          <rect width="70" height="140" rx="35" fill="#66E2DC" />
          <rect y="140" width="140" height="140" rx="70" fill="#FFB964" />
          <rect
            x="1"
            y="281"
            width="138"
            height="138"
            rx="69"
            stroke="#FCFAF9"
            strokeWidth="2"
          />
          <rect
            x="36"
            y="351"
            width="68"
            height="68"
            rx="34"
            stroke="#FCFAF9"
            strokeWidth="2"
          />
        </svg>
      </StyledVectorCard>
    );
  }
}
