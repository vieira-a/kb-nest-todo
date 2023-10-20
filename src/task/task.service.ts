import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { SignUpEntity } from '../user/signup/entities/signup.entity';
import { LoadTaskDTO } from './dto/load-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async dbAddTask(task: TaskEntity) {
    this.taskRepository.save(task);
  }

  async dbLoadTaskByUser(id: SignUpEntity) {
    const tasks = await this.taskRepository.findBy({ user: id });
    const taskList = tasks.map(
      (task) =>
        new LoadTaskDTO(
          task.id,
          task.title,
          task.description,
          task.status,
          task.createdAt,
          task.updatedAt,
        ),
    );
    return taskList;
  }

  async dbUpdateTask(id: string, taskData: UpdateTaskDto) {
    await this.taskRepository.update(id, taskData);
  }

  async dbDeleteTask(id: string, user: SignUpEntity) {
    const result = await this.taskRepository.delete({
      id: id,
      user: user,
    });
    return result;
  }
}
