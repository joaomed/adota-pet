import { styled } from '@mui/material'
import theme from '../../themes/theme';

export const HeaderAdminContainer = styled('header')`
  height: 115px;
  background-color: #f6f6f6 ;
  padding: ${({theme})=> theme.spacing(2)};
    
  div{
    height: 100%;
    max-width: 970px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({theme})=> theme.spacing(2)};
  }

  a{
    font-size: 14px;
  }

`;

export const Logo = styled('img')`
  width: 125px;
`;

export const LinksContainer = styled('nav')`
  display: flex;
  gap: ${({theme})=> theme.spacing(2)};
  flex-wrap: wrap;
  justify-content: flex-end;
`;