import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoadTaskDTO } from './dto/load-task.dto';
import { TaskEntity } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { SignUpEntity } from 'src/user/signup/entities/signup.entity';

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

  async dbDeleteTask(id: string) {
    await this.taskRepository.delete(id);
  }
}
