import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadTaskDTO } from './dto/load-task.dto';
import { TaskEntity } from './entities/task.entity';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async dbAddTask(task: TaskEntity) {
    this.taskRepository.save(task);
  }

  async dbLoadTasks() {
    const tasks = await this.taskRepository.find();
    const taskList = tasks.map((task) => new LoadTaskDTO(task.id, task.title));
    return taskList;
  }

  async dbUpdateTask(id: string, taskData: UpdateTaskDTO) {
    await this.taskRepository.update(id, taskData);
  }

  async dbDeleteTask(id: string) {
    await this.taskRepository.delete(id);
  }
}
