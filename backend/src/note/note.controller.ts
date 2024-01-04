// note.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Note } from './note.entity';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  async getAllNotes(): Promise<Note[]> {
    return await this.noteService.getAllNotes();
  }

  @Post('create')
  async createNote(@Body() note: Note): Promise<Note> {
    return await this.noteService.createNote(note);
  }

  @Put(':id/edit')
  async editNote(
    @Param('id') id: number,
    @Body() updatedNote: Note,
  ): Promise<Note | null> {
    return await this.noteService.editNote(id, updatedNote);
  }

  @Delete(':id/delete')
  async deleteNote(@Param('id') id: number): Promise<Note | null> {
    return await this.noteService.deleteNote(id);
  }

  @Put(':id/archive')
  async archiveNote(@Param('id') id: number): Promise<Note | null> {
    return await this.noteService.archiveNote(id);
  }
}
