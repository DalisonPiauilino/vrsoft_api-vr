/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  readonly descricao: string;

  @IsString()
  readonly ementa: string;

}
