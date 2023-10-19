import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() loginData: LoginDto, @Res() res: Response) {
    try {
      const token = await this.loginService.getToken(loginData);
      return res.status(HttpStatus.OK).json({
        message: 'User successfully authenticated',
        token: token,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        return res
          .status(error.getStatus())
          .json({ error: error.getResponse() });
      } else {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Authentication failure', error });
      }
    }
  }
}
