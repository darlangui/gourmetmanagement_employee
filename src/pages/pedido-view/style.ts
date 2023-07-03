import { colors } from './../../styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  display: flex;
`;

export const Header = styled.header`
  position: sticky;
  width: 112px;
  height: 100vh;
  
  top: 0;
  padding-top: 24px;
    
  border-right: 2px solid #E7E7E7;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
    .user {
      height: 56px;
      width: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      
          img{
            max-width: 48px;
            max-height: 48px;
            position: absolute;
          }
          
          .row{
            cursor: pointer;
            img{
              max-width: 26px;
              max-height: 26px;
            }
          }
      }
  
      .file{
        margin-top: 56px;
        cursor: pointer;
        img{
          max-width: 48px;
          max-height: 48px;
        }
      }
  
      .order{
        margin-top: 24px;
        cursor: pointer;
        img{
          max-width: 48px;
          max-height: 48px;
        }
      }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  
  .nav{
    position: sticky;

    font-family: 'Lato', sans-serif;
    
    width: 100%;
    height: 96px;

    padding: 0px 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: 2px solid #E7E7E7;

      button{
        width: 113px;
        height: 48px;
        border-radius: 8px;
        background-color: ${colors.primary};
        border: none;
        color: ${colors.grayscale.white};
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
      }
    }
    
    .content{
      height: 100%;
      width: 100%;
      font-family: 'Poppins', sans-serif;

      flex-grow: 1;
      
      padding: 32px 48px;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;

      background-color: ${colors.grayscale.white};
      }
      
    }
`;




