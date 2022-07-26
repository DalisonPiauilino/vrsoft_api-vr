/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { CursoAluno } from './cursos-alunos.entity';

export const cursosAlunosProviders = [
  {
    provide: 'CURSOS_ALUNOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CursoAluno),
    inject: ['DATA_SOURCE'],
  },
];
