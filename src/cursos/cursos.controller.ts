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
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) { }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: number) {
    return this.cursosService.findOne(codigo);
  }

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: number, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(codigo, updateCursoDto);
  }
}
