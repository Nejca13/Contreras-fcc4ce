// ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Note } from './src/note/note.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'note',
  password: 'note',
  database: 'notes',
  synchronize: true,
  logging: true,
  entities: [Note],
};

export default ormconfig;
