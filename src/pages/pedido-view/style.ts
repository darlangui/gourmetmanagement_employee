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
          .logout-option{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            width: 50px;
            height: 30px;
            border: 2px solid #E7E7E7;
            font-family: 'Lato', sans-serif;
            position: absolute;
            cursor: pointer;
            margin-top: 100px;
          }
    
          .logout-option:hover{
            color: red;
          }
      
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
          max-width: 32px;
          max-height: 32px;
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
      flex-direction: column;

      background-color: ${colors.grayscale.white};
        
        .pedido{
          width: 1080px;
          height: 100%;

          border: 1px solid #E7E7E7;
          border-radius: 8px;
          padding: 24px;
          
          .title{
            display: flex;
            gap: 20px;
            margin-top: 15px;
          }

          .title-value{
            display: flex;
            font-size: 20px;
            margin-top: 50px;
            justify-content: space-between;
          }
          
          
          h3{
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0px;
            color: ${colors.grayscale.darkHigh};
          }
          
          span{
            display: flex;
            justify-content: space-between;
            color: ${colors.grayscale.darkLight};
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0px;
          }
      }
        .op{
          display: flex;
          gap: 10px;
          margin-top: 20px;
              
          .voltar{
            width: 112px;
            height: 48px;
            border-radius: 8px;
            border: 1.5px solid ${colors.primary};
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.primary};
            background-color: ${colors.grayscale.white};
            cursor: pointer;
            font-family: Lato;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0px;
          }

        .salvar{
          margin-left: 56px;
          width: 112px;
          height: 48px;
          border-radius: 8px;
          background-color: ${colors.primary};
          color: ${colors.grayscale.white};
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-family: Lato;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: left;
        }

        .deletar{
          margin-left: 56px;
          width: 112px;
          height: 48px;
          border-radius: 8px;
          border: 1.5px solid ${colors.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${colors.primary};
          background-color: ${colors.grayscale.white};
          cursor: pointer;
          font-family: Lato;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0px;
        } 
        }
      
    }
`;




