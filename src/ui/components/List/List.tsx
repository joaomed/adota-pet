import { Button } from '@mui/material'

import {
  ListStyled,
  ElementList,
  Photo,
  Informations,
  Name,
  Description
 
} from './List.style'
import {Pet} from '../../../data/@types/Pets'
import {TextService} from '../../../data/services/TextServices'

interface ListProps{
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps){
  const maxSizeTextHistory = 200;

  return(
    <ListStyled>
      {props.pets.map(pet => (       
        <ElementList key={pet.id} >
          <Photo src={pet.photo} alt={pet.name} />
            <Informations>
            <Name> {pet.name} </Name>
            <Description> 
              {TextService.limitarTexto(pet.history, maxSizeTextHistory) }           
            </Description>
            <Button
            onClick={() => props.onSelect(pet)}
            variant={'contained'}
            fullWidth
            >Adotar {pet.name}</Button>
          </Informations>
        </ElementList>
      ))}
    </ListStyled>
  )
}