import { valueToPercent } from '@mui/base'
import { AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { Pet } from '../../@types/Pets'
import { ApiService } from '../../services/ApiServices'

export function useIndex(){
  const [petList, setPetList] = useState<Pet[]>([])
  // < > = para passar o tipo
  const [selectedPet,setSelectedPet] = useState<Pet | null>(null)
  const [email,setEmail] = useState('')
  const [value,setValue] = useState('')
  const [message,setMessage] = useState('') 

  useEffect(()=>{
    ApiService.get('/pets')
    .then((answer)=>{
      setPetList(answer.data)      
    })
  },[])

  function adopt(){
    if(selectedPet!==null){
      if(validateAdoptionData()){
        ApiService.post('/adocoes',{
          pet_id: selectedPet.id,
          email: email,
          valor: value
      })
          .then(()=>{
            setSelectedPet(null);
            setMessage('Pet adotado com sucesso!')
            clearForm()
          })
          .catch((error: AxiosError)=>{
            setMessage(error.response?.data.message)
          })
      } else {
        setMessage('Preencha todos os campos corretamente')
      }    

    }

  }

  //usar biblioteca para validação mais elaborada
  function validateAdoptionData(){
    return email.length > 0 && value.length > 0;
  }

  function clearForm(){
    setEmail('')
    setValue('')    
  }

  return {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adopt
  }
}