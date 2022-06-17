import { useState } from "react";
import { ApiService } from "../../../services/ApiServices";
import { AxiosError } from "axios";

export function useCadastro(){
  const [name, setName] = useState('')
  const [history, setHistory] = useState('')
  const [photo, setPhoto] = useState('')  
  const [message, setMessage] = useState('')  
  

  function register(){
    if(validateRegisterData()){
      //registra no back-end o pet
      ApiService.post('/pets', {
        name,
        history,
        photo

      })
      //quando receber a resposta do back-end, limpa o formulário e mostra uma mensagem de sucesso
      .then(()=> {
        clearForm();
        setMessage('Pet cadastrado com sucesso!')
      })
      //caso dê erro, usamos o catch
      .catch((error:AxiosError)=>{
        setMessage(error.response?.data.message)
      })

    }else {
      setMessage('Preencha todos os campos')
    }
  }

  //usar biblioteca para validação mais elaborada
  function validateRegisterData(){
    return name.length > 2 && history.length > 20 && photo.length > 5;
  }

  function clearForm(){
    setName('')
    setHistory('')    
    setPhoto('')    
  }

  return {
    name,
    setName,
    history,
    setHistory,
    photo,
    setPhoto,
    message,
    setMessage,
    register
  }
}
