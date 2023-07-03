import { colors } from '../../styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  
  .right{
    width: 50vw;
    height: 100vh;
  }
  
  .ilust_content{
    height: 100vh;
    border-radius: 48px 0 0 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      .square{
        width: 180px;
        height: 180px;
        background-color:  ${colors.grayscale.darkLight};;
        border-radius: 10%;
        animation: animateSquare 7s infinite ease-in-out;
        rotate: 45deg;
      }
      .blur{
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 10%;
        background: ${colors.grayscale.darkHigh};
        -webkit-backdrop-filter: blur(20px);
        rotate: 45deg;
        animation: animateBlur 7s infinite ease-in-out;
      }
      .blur_two{
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 10%;
        rotate: 45deg;
        background: ${colors.primary};
        -webkit-backdrop-filter: blur(20px);
        animation: animateBlurTwo 7s infinite ease-in-out;
      }


        @keyframes animateSquare {
          0% {
            transform: translate3d(0px, 0px, 0px);
          } 50% {
              transform: translate3d(0px, 180px, 40px);
            } 100% {
                transform: translate3d(0px, 0px, 0px);
              }
        }
        @keyframes animateBlur {
          0% {
            transform: translate3d(0px, 0px, 0px);
          } 50% {
              transform: translate3d(40px, 40px, 40px);
            } 100% {
                transform: translate3d(0px, 0px, 0px);
              }
        }
        @keyframes animateBlurTwo {
          0% {
            transform: translate3d(0px, 0px, 0px);
          } 50% {
              transform: translate3d(180px, 0px, 40px);
            } 100% {
                transform: translate3d(0px, 0px, 0px);
              }
        }
  }
  
  

`;

