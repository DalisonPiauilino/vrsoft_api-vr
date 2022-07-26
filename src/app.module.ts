/* eslint-disable prettier/prettier */
import { CursosModule } from './cursos/cursos.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AlunosModule } from './alunos/alunos.module';
import { CursosAlunosModule } from './cursos-alunos/cursos-alunos.module';

@Module({
  imports: [
    DatabaseModule,
    CursosModule,
    AlunosModule,
    CursosAlunosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
