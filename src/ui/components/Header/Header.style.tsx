import { styled } from '@mui/material'
import theme from '../../themes/theme';

export const HeaderContainer = styled('header')`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
  //spacing(1) == 8px
  padding:${({theme})=>theme.spacing(6)} ;
`;

export const Logo = styled('img')`
  width: 230px ;

`;
