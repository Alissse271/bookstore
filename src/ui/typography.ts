import { css } from "styled-components";
import { Media } from "./media";

const H1 = css`
  font-family: "Bebas Neue", cursive;
  font-weight: 700;
  font-size: 56px;
  line-height: 114%;

  ${Media.LG} {
    font-size: 32px;
    line-height: 138%;
  }
`;
const H2 = css`
  font-family: "Bebas Neue", cursive;
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;

  ${Media.LG} {
    font-size: 28px;
    line-height: 143%;
  }
`;
const H3 = css`
  font-family: "Bebas Neue", cursive;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
`;
const S1 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.05em;
`;
const S2 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 156%;

  ${Media.LG} {
    font-size: 16px;
    line-height: 150%;
  }
`;
const S3 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 200%;
`;
const B1 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
`;
const B2 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
`;
const B3 = css`
  font-size: 16px;
  line-height: 150%;
`;
const B4 = css`
  font-size: 16px;
  line-height: 200%;
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1, B2, B3, B4 };
