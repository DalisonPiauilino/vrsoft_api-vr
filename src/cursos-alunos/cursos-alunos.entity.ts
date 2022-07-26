/* eslint-disable prettier/prettier */
import { Aluno } from 'src/alunos/alunos.entity';
import { Curso } from 'src/cursos/cursos.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CursoAluno {

  @PrimaryGeneratedColumn()
  codigo: number;

  @ManyToOne(() => Aluno, (aluno) => aluno.codigo, { eager: true })
  @JoinTable()
  codigoAluno: number;

  @ManyToOne(() => Curso, (curso) => curso.codigo, { eager: true })
  @JoinTable()
  codigoCurso: number;

}
