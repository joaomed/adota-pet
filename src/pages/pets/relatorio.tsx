import { NextPage } from "next";
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";
import Title from "../../ui/components/Title/Title";

import { 
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody } from "@mui/material";

const Relatorio:NextPage = ()=> {

  const {listaRelatorio} = useRelatorio();

  return(
    <>
      <Title 
      title="Relatório de Adoção"
      subtitle='Veja a lista de pets adotados'/>

      <TableContainer 
      component={Paper}
      sx={{maxWidth: 830, mx:'auto', p:{xs:3,md:5}}}>

        
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">ValorMensal</TableCell>
            </TableRow>
          </TableHead>

         
          <TableBody>
            {listaRelatorio.map((adocao)=>(
              <TableRow key={adocao.id}>
                <TableCell>{adocao.pet.name}</TableCell>
                <TableCell>{adocao.email}</TableCell>
                <TableCell align="right">{adocao.valor}</TableCell>
              </TableRow>
            ))}         
          </TableBody> 
        </Table>      
      </TableContainer>
    </>
  )
}

export default Relatorio;
