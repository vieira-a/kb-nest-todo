import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
