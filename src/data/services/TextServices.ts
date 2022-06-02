export const TextService = {
  limitarTexto(text: string, maxSizeText: number):string{
      if(text.length < maxSizeText){
        return text;
      }      
    return text.slice(0, maxSizeText) + '...';       
  }
}