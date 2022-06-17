import { Pet } from "./Pets";

export interface Relatorio{
  id: number;
  email: string;
  valor: string;
  pet: Pet;
}