import { SignUpEntity } from '../../user/signup/entities/signup.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', length: 100, nullable: false })
  title: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;

  @Column({ name: 'status', nullable: false })
  status: 'open' | 'doing' | 'done';

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @ManyToOne(() => SignUpEntity, (user) => user.tasks)
  user: SignUpEntity | string;
}
