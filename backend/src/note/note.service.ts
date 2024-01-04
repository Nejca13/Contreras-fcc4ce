// note.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async getAllNotes(): Promise<Note[]> {
    return await this.noteRepository.find();
  }

  async createNote(note: Note): Promise<Note> {
    return await this.noteRepository.save(note);
  }

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

  async deleteNote(id: number): Promise<Note | null> {
    const existingNote = await this.noteRepository.findOne({ where: { id } });

    if (existingNote) {
      await this.noteRepository.remove(existingNote);
      return existingNote;
    } else {
      return null;
    }
  }

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
