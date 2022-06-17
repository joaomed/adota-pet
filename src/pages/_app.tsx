import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import tema from '../ui/themes/theme'
import Header from '../ui/components/Header/Header'
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (   
    //Cabeçalho padrão apenas quando estiver na tela inicial
    // Caso estiver na home, retorna cabeçalho simples. Senão, cabeçalho Admin.
    <ThemeProvider theme={tema}>
      {router.pathname === '/' ? <Header/> : <HeaderAdmin/>}     
            
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
