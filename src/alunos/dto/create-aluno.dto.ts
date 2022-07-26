/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  readonly nome: string;

}
