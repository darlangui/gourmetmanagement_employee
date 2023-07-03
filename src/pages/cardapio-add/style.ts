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
      
        h3{
          font-weight: 500;
          font-size: 18px;
          font-family: Poppins;
          line-height: 26px;
        }
      
        .name{
          width: 436px;
          height: 70px;
          input{
            padding: 9px 16px;
            width: 436px;
            height: 40px;
            border-radius: 8px;
            border: 1.2px solid #E7E7E7;
            margin-top: 4px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
          }
        }
        
        .price{
          width: 436px;
          height: 70px;
          margin-left: 40px;
          input{
            padding: 9px 16px;
            width: 436px;
            height: 40px;
            border-radius: 8px;
            border: 1.2px solid #E7E7E7;
            margin-top: 4px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
          }
        }
      
        .desc{
          width: 436px;
          height: 170px;
          textarea{
            padding: 9px 16px;
            width: 436px;
            height: 140px;
            border-radius: 8px;
            border: 1.2px solid #E7E7E7;
            margin-top: 4px;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            resize: none;
          }
            .title{
              width: 100%;
              display: flex;
              justify-content: space-between;
                .sub-title{
                  display: flex;
                  gap: 4px;
                }
              span{
                color: ${colors.grayscale.darkLight};
              }
            }
        }

      .ingred{
        width: 436px;
        height: 170px;
        margin-left: 40px;
        textarea{
          padding: 9px 16px;
          width: 436px;
          height: 140px;
          border-radius: 8px;
          border: 1.2px solid #E7E7E7;
          margin-top: 4px;
          font-family: Poppins;
          font-size: 16px;
          font-weight: 500;
          line-height: 26px;
          resize: none;
        }

        .title{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .sub-title{
            display: flex;
            gap: 4px;
          }
          span{
            color: ${colors.grayscale.darkLight};
          }
        }
      }
      
      .image{
        width: 436px;
        height: 70px;
        
        input{
          left: -9999px;
          position: absolute;
        }
        
        .select{
          margin-top: 4px;
          width: 436px;
          height: 40px;
          border-radius: 8px;
          border: 1.2px solid #E7E7E7;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 16px;
        }
        
        .select-item{
          width: 130px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0px 7px 7px 0px;
          border: 2px solid #E7E7E7;
        }
      }

      .op{
        width: 900px;
        height: 50px;
        display: flex;
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
        .error-message{
          margin-left: 20px;
          color: ${colors.primary};
        }
      }
      
    }
`;




