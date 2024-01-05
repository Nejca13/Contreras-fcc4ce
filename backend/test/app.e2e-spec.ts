import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('NoteController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  let createdNoteId: number;

  const sampleNote = {
    title: 'Sample Note',
    tag: 'example',
    content: 'This is a sample note.',
  };

  it('/notes/create (POST) - should create a new note', async () => {
    return request(app.getHttpServer())
      .post('/notes/create')
      .send(sampleNote)
      .expect(201)
      .expect((res) => {
        const createdNote = res.body;
        createdNoteId = createdNote.id;
        expect(createdNote.title).toEqual(sampleNote.title);
        expect(createdNote.tag).toEqual(sampleNote.tag);
        expect(createdNote.content).toEqual(sampleNote.content);
      });
  });

  it('/notes/:id/edit (PUT) - should update the created note', async () => {
    const updatedNote = {
      title: 'Updated Note',
      tag: 'updated',
      content: 'This note has been updated.',
    };

    return request(app.getHttpServer())
      .put(`/notes/${createdNoteId}/edit`)
      .send(updatedNote)
      .expect(200)
      .expect((res) => {
        const updatedNote = res.body;
        expect(updatedNote.title).toEqual(updatedNote.title);
        expect(updatedNote.tag).toEqual(updatedNote.tag);
        expect(updatedNote.content).toEqual(updatedNote.content);
      });
  });

  it('/notes/:id/archive (PUT) - should archive the updated note', () => {
    return request(app.getHttpServer())
      .put(`/notes/${createdNoteId}/archive`)
      .expect(200)
      .expect((res) => {
        const archivedNote = res.body;
        expect(archivedNote.id).toEqual(createdNoteId);
        expect(archivedNote.archived).toEqual(true);
      });
  });

  it('/notes/:id/delete (DELETE) - should delete the updated note', () => {
    return request(app.getHttpServer())
      .delete(`/notes/${createdNoteId}/delete`)
      .expect(200)
      .expect((res) => res);
  });

  it('/notes (GET) - should confirm the note has been deleted', () => {
    return request(app.getHttpServer())
      .get('/notes')
      .expect(200)
      .expect((res) => {
        const notes = res.body;
        const deletedNote = notes.find((note) => note.id === createdNoteId);
        expect(deletedNote).toBeUndefined();
      });
  });
});
