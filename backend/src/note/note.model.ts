// Importa las dependencias de TypeORM para definir la entidad.
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Define la entidad 'Note' con sus propiedades y decoradores correspondientes.
@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  tag: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: false })
  archived: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
