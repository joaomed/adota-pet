import {
  TitleStyled,
  SubtitleStyled
} from './Title.style'

interface TitleProps {
  title: string;
  // Nem todas as telas tem um subtitulo.
  // Logo, coloca ?: pois não é obrigatório
  subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
  return(
    <>
      <TitleStyled>{props.title}</TitleStyled>
      <SubtitleStyled>{props.subtitle}</SubtitleStyled>
    </>  
  )
}