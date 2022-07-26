/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Aluno } from './alunos.entity';

export const alunosProviders = [
  {
    provide: 'ALUNOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
    inject: ['DATA_SOURCE'],
  },
];
