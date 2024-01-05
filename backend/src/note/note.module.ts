// Importa el módulo de NestJS y las dependencias necesarias.
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa la entidad, controlador y modelo asociados a las notas.
import { Note } from './note.model';
import { NoteController } from './note.controller';

/**
 * Módulo de NestJS para gestionar las notas.
 * @module
 */
@Module({
  /**
   * Importa el módulo de TypeORM, configurado para trabajar con la entidad 'Note'.
   * @type {TypeOrmModule}
   */
  imports: [TypeOrmModule.forFeature([Note]), TypeOrmModule.forRoot()],

  /**
   * Controladores que pertenecen al módulo de notas.
   * @type {NoteController[]}
   */
  controllers: [NoteController],
})
export class NoteModule {}
