// Importa las dependencias de NestJS y TypeORM.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importa la entidad asociada a las notas.
import { Note } from './note.entity';

/**
 * Servicio para gestionar las operaciones relacionadas con las notas.
 * @class
 */
@Injectable()
export class NoteService {
  /**
   * Constructor del servicio de notas.
   * @constructor
   * @param {Repository<Note>} noteRepository - Repositorio de TypeORM para la entidad Note.
   */
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  /**
   * Obtiene todas las notas.
   * @async
   * @function
   * @returns {Promise<Note[]>} Promesa que se resuelve con un array de todas las notas.
   */
  async getAllNotes(): Promise<Note[]> {
    return await this.noteRepository.find();
  }

  /**
   * Obtiene las notas filtradas por una etiqueta específica.
   * @async
   * @function
   * @param {string} tag - Etiqueta utilizada para filtrar las notas.
   * @returns {Promise<Note[]>} Promesa que se resuelve con un array de notas filtradas por etiqueta.
   */
  async getNotesByTag(tag: string): Promise<Note[]> {
    return await this.noteRepository.find({ where: { tag } });
  }

  /**
   * Crea una nueva nota.
   * @async
   * @function
   * @param {Note} note - Objeto que representa la nueva nota.
   * @returns {Promise<Note>} Promesa que se resuelve con la nota creada.
   */
  async createNote(note: Note): Promise<Note> {
    return await this.noteRepository.save(note);
  }

  /**
   * Edita una nota existente.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a editar.
   * @param {Note} updatedNote - Objeto que representa la nota actualizada.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota editada o nula si no se encuentra.
   */
  async editNote(id: number, updatedNote: Note): Promise<Note | null> {
    const existingNote = await this.noteRepository.findOne({ where: { id } });

    if (existingNote) {
      const editedNote = await this.noteRepository.save({
        ...existingNote,
        ...updatedNote,
        updatedAt: new Date(),
      });

      return editedNote;
    } else {
      return null;
    }
  }

  /**
   * Elimina una nota.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a eliminar.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota eliminada o nula si no se encuentra.
   */
  async deleteNote(id: number): Promise<Note | null> {
    const existingNote = await this.noteRepository.findOne({ where: { id } });

    if (existingNote) {
      await this.noteRepository.remove(existingNote);
      return existingNote;
    } else {
      return null;
    }
  }

  /**
   * Archiva una nota.
   * @async
   * @function
   * @param {number} id - Identificador único de la nota a archivar.
   * @returns {Promise<Note | null>} Promesa que se resuelve con la nota archivada o nula si no se encuentra.
   */
  async archiveNote(id: number): Promise<Note | null> {
    const existingNote = await this.noteRepository.findOne({ where: { id } });

    if (existingNote) {
      existingNote.archived = true;
      existingNote.updatedAt = new Date();

      return await this.noteRepository.save(existingNote);
    } else {
      return null;
    }
  }
}
