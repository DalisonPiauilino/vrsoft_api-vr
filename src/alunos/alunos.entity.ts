/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({length: 50})
  nome: string;

}
