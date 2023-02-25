export class User {
  constructor() {
    this.isValidCpf = false;
  }

  id: string;
  nome: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  cpf: string;
  isValidCpf: boolean;
}
