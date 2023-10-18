import {
  Controller,
  Post,
  Request,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { ProfileService } from './profile.service';
import { Response } from 'express';

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Post()
  async getUserProfile(@Request() request: Request, @Res() res: Response) {
    try {
      const token = request.headers['authorization']?.split(' ')[1];
      const userAccount = await this.profileService.loadUserProfile(token);
      return res.status(HttpStatus.OK).json({
        message: 'Conta de usuário carregada com sucesso',
        data: userAccount,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        return res
          .status(error.getStatus())
          .json({ error: error.getResponse() });
      } else {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Falha ao carregar dados do usuário', error });
      }
    }
  }
}
