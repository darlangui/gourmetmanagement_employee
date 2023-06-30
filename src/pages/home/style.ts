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
    
    padding: 32px 48px;
    
    display: flex;
    justify-content: space-between;
    
    border-bottom: 2px solid #E7E7E7;
    
    .search{
      display: flex;
      justify-content: space-between;
      
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
    height: 100%;
    width: 100%;

    flex-grow: 1;
  }
`;




