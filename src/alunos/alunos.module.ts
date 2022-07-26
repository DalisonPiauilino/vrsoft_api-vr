/* eslint-disable prettier/prettier */
import { AlunosService } from './alunos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { alunosProviders } from './alunos.providers';
import { AlunosController } from './alunos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AlunosController],
  providers: [
    ...alunosProviders,
    AlunosService
  ],
})
export class AlunosModule {}
