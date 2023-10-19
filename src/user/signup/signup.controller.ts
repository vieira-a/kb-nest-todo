import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SignUpService } from './signup.service';
import { SignUpDto } from './dto/signup.dto';
import { SignUpEntity } from './entities/signup.entity';

@Controller('/signup')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  async addUserAccount(@Body() accountData: SignUpDto, @Res() res: Response) {
    try {
      if (accountData.password !== accountData.passwordConfirmation) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Passwords not match',
        });
      }

      const newUserAccount = new SignUpEntity();
      newUserAccount.name = accountData.name;
      newUserAccount.email = accountData.email;
      newUserAccount.username = accountData.username;
      newUserAccount.password = accountData.password;
      newUserAccount.createdAt = new Date().toLocaleDateString('pt-br');
      newUserAccount.updatedAt = new Date().toLocaleDateString('pt-br');

      await this.signUpService.dbAddUserAccount(newUserAccount);

      return res.status(HttpStatus.OK).json({
        message: 'User account created successfully',
      });
    } catch (error) {
      if (error instanceof HttpException) {
        return res
          .status(error.getStatus())
          .json({ error: error.getResponse() });
      } else {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Failed to create user account' });
      }
    }
  }
}
