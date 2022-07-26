/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CursosAlunosService } from './cursos-alunos.service';
import { CreateCursoAlunoDto } from './dto/create-curso-aluno.dto';

@Controller('cursos-alunos')
export class CursosAlunosController {
  constructor(private readonly cursosAlunosService: CursosAlunosService) {}

  @Get()
  findAll() {
    return this.cursosAlunosService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.cursosAlunosService.findOne(codigo);
  }

  @Post()
  create(@Body() createCursoAlunoDto: CreateCursoAlunoDto) {
    return this.cursosAlunosService.create(createCursoAlunoDto);
  }

}
