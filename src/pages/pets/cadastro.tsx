import { NextPage } from "next";
import { useCadastro } from "../../data/hooks/pages/pets/useCadastro";
import  Title  from "../../ui/components/Title/Title"
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";


const Cadastro: NextPage = () => {
  const {
    name,
    setName,
    history,
    setHistory,
    photo,
    setPhoto,
    message,
    setMessage,
    register
  } = useCadastro();


  return(
    <>
      <Title
        title="Cadastro de Pets para adoção"
        subtitle="Preencha os dados do novo Pet"
        />
      <Paper sx={{maxWidth:970, mx:'auto', p:5}} >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label={'Nome'}
              fullWidth
              placeholder="Digite o nome do Pet"
            /> 
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              label={'História'}
              multiline
              rows={4}
              fullWidth
              placeholder="História do Pet"
            /> 
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              label={'Foto'}
              fullWidth
              placeholder="Digite o endereço da imagem"
            /> 
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{mt:2}}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >Enviar imagem</Button>
          </Grid>

          <Grid item xs={12} sx={{textAlign: 'center'}}>      
            <Button
              onClick={register}
              variant={'contained'}
              fullWidth
              sx={{maxWidth: {md:200}, mt:4}}
            >Cadastrar Pet</Button>
          </Grid>

        </Grid>
      </Paper>

      <Snackbar
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={()=> setMessage('')}
        message={message}
      />
    </>
  )
}

export default Cadastro;