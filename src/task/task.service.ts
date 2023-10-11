import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadTaskDTO } from './dto/load-task.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>
  ) {}

  async dbLoadTasks(): Promise<TaskEntity[]> {
    return this.taskRepository.find()
  }
}