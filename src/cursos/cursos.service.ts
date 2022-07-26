/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Curso } from './cursos.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursosService {
  constructor(
    @Inject('CURSOS_REPOSITORY')
    private cursoRepository: Repository<Curso>
  ) {}

  async findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  async findOne(codigo: number): Promise<Curso> {
    const curso = await this.cursoRepository.findOne({where: {codigo}});

    if (!curso) {
      throw new NotFoundException(`Curso CODIGO: ${codigo}, não encontrado`);
    }

    return curso;
  }

  async create(createCursoDto: CreateCursoDto) {
    const curso = await this.cursoRepository.create(createCursoDto);
    return this.cursoRepository.save(curso);
  }

  async update(codigo: number, updateCursoDto: UpdateCursoDto) {

    const curso = await this.cursoRepository.preload({
      codigo: +codigo,
      ...updateCursoDto
    });

    if (!curso) {
      throw new NotFoundException(`Curso CODIGO: ${codigo}, não encontrado`);
    }

    return this.cursoRepository.save(curso);
  }
}
