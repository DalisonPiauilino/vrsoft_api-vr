/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from './alunos.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(
    @Inject('ALUNOS_REPOSITORY')
    private alunoRepository: Repository<Aluno>
  ) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  async findOne(codigo: number): Promise<Aluno> {
    const aluno = await this.alunoRepository.findOne({where: {codigo}});

    if (!aluno) {
      throw new NotFoundException(`Aluno CODIGO: ${codigo}, não encontrado`);
    }

    return aluno;
  }

  async create(createAlunoDto: CreateAlunoDto) {
    const aluno = await this.alunoRepository.create(createAlunoDto);
    return this.alunoRepository.save(aluno);
  }

  async update(codigo: number, updateAlunoDto: UpdateAlunoDto) {

    const aluno = await this.alunoRepository.preload({
      codigo: +codigo,
      ...updateAlunoDto
    });

    if (!aluno) {
      throw new NotFoundException(`Aluno CODIGO: ${codigo}, não encontrado`);
    }

    return this.alunoRepository.save(aluno);
  }
}
