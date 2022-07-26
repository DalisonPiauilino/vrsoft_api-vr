/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { CursoAluno } from './cursos-alunos.entity';
import { CreateCursoAlunoDto } from './dto/create-curso-aluno.dto';

@Injectable()
export class CursosAlunosService {
  constructor(
    @Inject('CURSOS_ALUNOS_REPOSITORY')
    private cursosAlunosRepository: Repository<CursoAluno>
  ) {}

  async findAll(): Promise<CursoAluno[]> {
    return this.cursosAlunosRepository.find();
  }

  async findOne(codigo: number): Promise<CursoAluno> {
    const cursoAluno = await this.cursosAlunosRepository.findOne({ where: { codigo }});

    if (!cursoAluno) {
      throw new NotFoundException(`Aluno CODIGO: ${codigo}, não encontrado`);
    }

    return cursoAluno;
  }

  async findByAlunoCurso(codigoAluno: number, codigoCurso: number): Promise<CursoAluno> {
    const cursoAluno = await getRepository(CursoAluno) 
      .createQueryBuilder('ca')
      .where('ca.codigoAlunoCodigo = :codigoAluno', { codigoAluno })
      .where('ca.codigoCursoCodigo = :codigoCurso', { codigoCurso })
      .getOne();

    // if (!cursoAluno) {
    //   throw new NotFoundException(`Aluno CODIGO: ${codigoAluno}, não encontrado`);
    // }

    return cursoAluno;
  }

  async create(createCursoAlunoDto: CreateCursoAlunoDto) {

    // const ca = this.findByAlunoCurso(createCursoAlunoDto.codigoAluno, createCursoAlunoDto.codigoCurso);
    // console.log(ca);
    
    // if (ca) {
    //   throw new NotFoundException(`Aluno CODIGO: ${createCursoAlunoDto.codigoAluno}, já cadastrado ao Curso CODIGO: ${createCursoAlunoDto.codigoCurso}`);
    // }

    const cursoAluno = await this.cursosAlunosRepository.create(createCursoAlunoDto);
    return this.cursosAlunosRepository.save(cursoAluno);
  }
}
