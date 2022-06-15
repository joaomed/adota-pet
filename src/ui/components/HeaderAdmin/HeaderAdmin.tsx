import { Link, Box } from '@mui/material';
import NextLink from 'next/link'

import {
  HeaderAdminContainer,
  Logo,
  LinksContainer

} from './HeaderAdmin.style';

export default function HeaderAdmin(){
  return (
    <HeaderAdminContainer>
      <div>
        <Logo src={'./images/logo.svg'} alt={'Adote um pet'} />
        <LinksContainer>
          
          <Link component={NextLink} href={'/pets/cadastro'}>
            <a>Cadastrar Pet</a>  
          </Link>

          <Link component={NextLink} href={'/pets/relatorio'}>
            <a>
              Relatório {' '}
              <Box 
                component={'span'}
                sx={{display: { sm: 'initial', xs:'none'}}}
              >
                de adoções
              </Box>
            </a>  
          </Link>
          
        </LinksContainer>
      </div>

  

    </HeaderAdminContainer>

  )
}