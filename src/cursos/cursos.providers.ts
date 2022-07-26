/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Curso } from './cursos.entity';

export const cursosProviders = [
  {
    provide: 'CURSOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Curso),
    inject: ['DATA_SOURCE'],
  },
];
