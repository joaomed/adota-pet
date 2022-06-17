import { useState,useEffect } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiServices";

export function useRelatorio(){
  // < > = para passar o tipo
  const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([])
  
  useEffect(()=>{
    ApiService.get('/adocoes')
    .then((answer)=>{
      setListaRelatorio(answer.data)      
    })
  },[])

  return {
    listaRelatorio 
  }
}