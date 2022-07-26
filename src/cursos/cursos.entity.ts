/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {

  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({length: 50})
  descricao: string;

  @Column('text')
  ementa: string;

}
