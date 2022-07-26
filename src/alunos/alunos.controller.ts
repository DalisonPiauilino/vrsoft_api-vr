/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.alunosService.findOne(codigo);
  }

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(codigo, updateAlunoDto);
  }
}
