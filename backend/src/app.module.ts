// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './note/note.entity';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import ormconfig from '../ormconfig';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Note]),
    // ...otros módulos
  ],
})
export class AppModule {}
