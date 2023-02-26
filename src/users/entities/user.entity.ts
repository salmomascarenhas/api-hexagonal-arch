import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: true })
  logradouro?: string;

  @Column({ nullable: true })
  complemento?: string;

  @Column({ nullable: true })
  bairro?: string;

  @Column({ nullable: true })
  localidade?: string;

  @Column({ nullable: true })
  uf?: string;

  @Column({ nullable: true })
  ibge?: string;

  @Column({ nullable: true })
  gia?: string;

  @Column({ nullable: true })
  ddd?: string;

  @Column({ nullable: true })
  siafi?: string;

  @Column({ nullable: true })
  cpf?: string;

  @Column({ default: false })
  isValidCpf: boolean;
}
