import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    background: ${colors.grayscale.white};
    color: ${colors.grayscale.black};
  }

  h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${colors.grayscale.black};
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 160%;
    color: ${colors.grayscale.darkHigh};
    font-size: 14px;
  }
`;