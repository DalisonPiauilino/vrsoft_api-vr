/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';

export class CreateCursoAlunoDto {
  @IsNumber()
  readonly codigoAluno: number;

  @IsNumber()
  readonly codigoCurso: number;

}
