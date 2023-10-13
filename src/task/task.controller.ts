import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { TaskService } from './task.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async addTask(@Body() task: AddTaskDTO, @Res() res: Response) {
    const timeNow = new Date().toLocaleDateString('pt-br')
    try {
      const newTask = new TaskEntity();
      newTask.title = task.title;
      newTask.description = task.description;
      newTask.status = task.status;
      newTask.createdAt = new Date().toLocaleDateString('pt-br');
      newTask.updatedAt = new Date().toLocaleDateString('pt-br');

      await this.taskService.dbAddTask(newTask);

      return res.status(HttpStatus.CREATED).json({
        message: 'Task created successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to create task',
        error: error.message,
      });
    }
  }

  @Get()
  async loadTasks(@Res() res: Response) {
    try {
      const taskList = await this.taskService.dbLoadTasks();

      return res.status(HttpStatus.OK).json({
        message: 'Tasks loaded successfully',
        data: taskList,
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to create task',
        error: error.message,
      });
    }
  }

  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskData: UpdateTaskDTO,
    @Res() res: Response,
  ) {
    try {
      await this.taskService.dbUpdateTask(id, taskData);
      return res.status(HttpStatus.OK).json({
        message: 'Task updated successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to update task',
        error: error.message,
      });
    }
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.taskService.dbDeleteTask(id);
      return res.status(HttpStatus.OK).json({
        message: 'Task deleted successfully',
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to delete task',
        error: error.message,
      });
    }
  }
}
