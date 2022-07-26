/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CursosAlunosController } from './cursos-alunos.controller';
import { cursosAlunosProviders } from './cursos-alunos.providers';
import { CursosAlunosService } from './cursos-alunos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CursosAlunosController],
  providers: [
    ...cursosAlunosProviders,
    CursosAlunosService
  ],
})
export class CursosAlunosModule {}
