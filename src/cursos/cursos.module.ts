/* eslint-disable prettier/prettier */
import { CursosService } from './cursos.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { cursosProviders } from './cursos.providers';
import { CursosController } from './cursos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CursosController],
  providers: [
    ...cursosProviders,
    CursosService
  ],
})
export class CursosModule {}
