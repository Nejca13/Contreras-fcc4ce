/**
 * @fileoverview Controlador para la entidad Note.
 * Este archivo contiene la implementación del controlador de la entidad Note, que gestiona las operaciones CRUD y otras acciones relacionadas con las notas.
 * @author Nicolas Contreras
 * @version 1.0.0
 */

// Importa las dependencias del framework NestJS.
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

// Importa la entidad Note y el servicio asociado.
import { Note } from './note.entity';
import { NoteService } from './note.service';

/**
 * Controlador para gestionar las operaciones CRUD de las notas.
 * Las rutas en este controlador se manejan bajo el prefijo 'notes'.
 * @class
 */
@Controller('notes')
export class NoteController {
  /**
   * Constructor del controlador.
   * @constructor
   * @param {NoteService} noteService - Instancia del servicio de notas.
   */
  constructor(private readonly noteService: NoteService) {}

  /**
   * Manejador de la ruta GET '/notes'.
   * Obtiene todas las notas.
   * @async
   * @function
   * @returns {Promise<Note[]>} Promesa que se resuelve con un array de notas.
   */
  @Get()
  async getAllNotes(): Promise<Note[]> {
    return await this.noteService.getAllNotes();
  }

  /**
   * Manejador de la ruta GET '/notes/filter/:tag'.
   * Obtiene las notas filtradas por una etiqueta específica.
   * @async
   * @function
   * @param {string} tag - Etiqueta utilizada para filtrar las notas.
   * @returns {Promise<Note[]>} Promesa que se resuelve con un array de notas filtradas por etiqueta.
   */
  @Get('filter/:tag')
  async getNotesByTag(@Param('tag') tag: string): Promise<Note[]> {
    return await this.noteService.getNotesByTag(tag);
  }

  /**
   * Manejador de la ruta POST '/notes/create'.
   * Crea una nueva nota.
   * @async
   * @function
   * @param {Note} note - Objeto que representa la nueva nota.
   * @returns {Promise<Note>} Promesa que se resuelve con la nota creada.
   */
  @Post('create')
  async createNote(@Body() note: Note): Promise<Note> {
    return await this.noteService.createNote(note);
  }

  /**
   * Manejador de la ruta PUT '/notes/:id/edit'.
   * Edita una nota existente.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a editar.
   * @param {Note} updatedNote - Objeto que representa la nota actualizada.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota editada o nula si no se encuentra.
   */
  @Put(':id/edit')
  async editNote(
    @Param('id') id: number,
    @Body() updatedNote: Note,
  ): Promise<Note | null> {
    return await this.noteService.editNote(id, updatedNote);
  }

  /**
   * Manejador de la ruta DELETE '/notes/:id/delete'.
   * Elimina una nota.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a eliminar.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota eliminada o nula si no se encuentra.
   */
  @Delete(':id/delete')
  async deleteNote(@Param('id') id: number): Promise<Note | null> {
    return await this.noteService.deleteNote(id);
  }

  /**
   * Manejador de la ruta PUT '/notes/:id/archive'.
   * Archiva una nota.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a archivar.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota archivada o nula si no se encuentra.
   */
  @Put(':id/archive')
  async archiveNote(@Param('id') id: number): Promise<Note | null> {
    return await this.noteService.archiveNote(id);
  }
}
