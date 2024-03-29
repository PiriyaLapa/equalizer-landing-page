import { Component, ReactNode } from "react";
import { StyledVector } from "./styles";

export default class VectorTablet extends Component {
  render(): ReactNode {
    return (
      <StyledVector>
        <svg
          width="231"
          height="368"
          viewBox="0 0 231 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 34.6667C0 -2.15231 29.8477 -32 66.6667 -32C103.486 -32 133.333 -2.15232 133.333 34.6667V234.667H100C44.7715 234.667 0 189.895 0 134.667V34.6667Z"
            fill="#66E2DC"
          />
          <path
            d="M133.333 234.667H200C236.819 234.667 266.667 264.514 266.667 301.333C266.667 338.152 236.819 368 200 368C163.181 368 133.333 338.152 133.333 301.333V234.667Z"
            fill="#191826"
          />
          <rect
            x="200"
            y="34.6666"
            width="66.6667"
            height="66.6667"
            rx="33.3333"
            fill="#FFB964"
          />
          <rect
            x="200"
            y="-32"
            width="66.6667"
            height="66.6667"
            rx="33.3333"
            fill="#FA7453"
          />
          <rect
            y="234.667"
            width="133.333"
            height="133.333"
            rx="66.6667"
            fill="#FA7453"
          />
          <rect
            x="133.333"
            y="-32"
            width="66.6667"
            height="133.333"
            rx="33.3333"
            fill="#191826"
          />
          <rect
            x="134.333"
            y="102.333"
            width="131.333"
            height="131.333"
            rx="65.6667"
            stroke="#191826"
            strokeWidth="2"
          />
          <rect
            x="134.333"
            y="135.667"
            width="64.6667"
            height="64.6667"
            rx="32.3333"
            stroke="#191826"
            strokeWidth="2"
          />
        </svg>
      </StyledVector>
    );
  }
}
