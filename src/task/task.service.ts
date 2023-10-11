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

  async dbAddTask(task: TaskEntity) {
    this.taskRepository.save(task)
  }

  async dbLoadTasks() {
    const tasks = await this.taskRepository.find();
    const taskList = tasks.map((task) => new LoadTaskDTO(
      task.id,
      task.title
    ))
    return taskList
  }

  async dbUpdateTask(id: string, taskData: Partial<TaskEntity>) {
    await this.taskRepository.update(id, taskData)
  }
}