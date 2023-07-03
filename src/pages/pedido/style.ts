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
  
  .nav{
    position: sticky; 
    
    width: 100%;
    height: 96px;
    
    padding: 0px 48px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: 2px solid #E7E7E7;
    
    font-family: 'Lato', sans-serif;
    
    .option{
      display: flex;
      gap: 50px;
      align-items: end;
      
      h3{
        display: flex;
        justify-content: space-between;
        color: ${colors.grayscale.darkLight};
        font-size: 14px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 0px;
        cursor: pointer;
      }
      
      h3:hover{
        color: ${colors.primary};
      }
    }
    
    .search{
      display: flex;
      justify-content: end;
      
      height: 48px;
      width: 438px;
      
      img{
        cursor: pointer;
        max-width: 48px;
        max-height: 48px;
        border-radius: 8px;
      }
      
      .input{
        width: 350px;
        height: 48px;
        padding: 12px 16px;
        
        border: 2px solid #E7E7E7;
        border-radius: 8px;
        
        display: flex;
        align-items: center;
        img{
          max-width: 20px;
          max-height: 20px;
        }
        
        input{
          border: none;
          background-color: transparent;
          height: 46px;
          width: 302px;
          padding: 12px;
        }
      }
    }
  }
  
  .content{
    font-family: 'Poppins', sans-serif;
    
    height: 100%;
    width: 100%;

    flex-grow: 1;
    
    padding: 32px 48px;
    
    display: flex;
    justify-content: center;

    background-color: #FAFAFA;
    
    .card-content{
      width: 1280px;
      height: 100%;

      display: flex;
      flex-wrap: wrap;
      gap: 40px 90px;
    
      .card{
        background-color: ${colors.grayscale.white};
        width: 302px;
        height: 244px;
        border-radius: 8px;
        border: 1px solid #E7E7E7;
        padding: 28px;
        padding-top: 36px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        .header{
          width: 250px;
          height: 40px;
          
          display: flex;
          justify-content: space-between;
          img{
            cursor: pointer;
            width: 29px;
            height: 29px;
          }
        }
        
        .line{
          margin-top: 35px;
          height: 2px;
          width: 250px;
          background-color: #E8E8E8;
        }
        
        .main{
          margin-top: 30px;
          height: 82px;
          width: 250px;
          
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
          
          .total{
            margin-top: 20px;
          }
        }
      }

    }
  }
    
    
`;




