import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../user/auth.guard';
import { AddTaskDTO } from './dto/add-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { TaskService } from './task.service';
import { ProfileService } from '../user/profile/profile.service';
import { SignUpEntity } from 'src/user/signup/entities/signup.entity';
import { extractToken } from '../user/utils';

@ApiTags('tasks')
@Controller('/task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly profileService: ProfileService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async addTask(
    @Request() request: Request,
    @Body() task: AddTaskDTO,
    @Res() res: Response,
  ) {
    try {
      const token = extractToken(request);

      const userAccount = await this.profileService.loadUserProfile(token);
      const user = new SignUpEntity();
      user.id = userAccount.id;

      const newTask = new TaskEntity();
      newTask.title = task.title;
      newTask.description = task.description;
      newTask.status = task.status;
      newTask.createdAt = new Date().toLocaleDateString('pt-br');
      newTask.updatedAt = new Date().toLocaleDateString('pt-br');
      newTask.user = user;

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

  @UseGuards(AuthGuard)
  @Get()
  async loadTaskByUser(@Request() request: Request, @Res() res: Response) {
    try {
      const token = extractToken(request);

      const userAccount = await this.profileService.loadUserProfile(token);
      const user = new SignUpEntity();
      user.id = userAccount.id;

      const taskList = await this.taskService.dbLoadTaskByUser(user);

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

  @UseGuards(AuthGuard)
  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskData: UpdateTaskDto,
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

  @UseGuards(AuthGuard)
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
