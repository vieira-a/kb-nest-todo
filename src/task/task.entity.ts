import { 
  Entity, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn
} from 'typeorm';

Entity({ name: 'tasks' })
export class TaskEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'title', length: 100, nullable: false })
  title: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'status', nullable: false })
  status: 'open' | 'doing' | 'done';

  @CreateDateColumn({ name: 'created_at'})
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string
}

