import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note.model';
import { NoteController } from './note.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), TypeOrmModule.forRoot()],
  controllers: [NoteController],
})
export class NoteModule {}
