import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
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
      const newUserAccount = new SignUpEntity()
      newUserAccount.name = accountData.name
      newUserAccount.email = accountData.email
      newUserAccount.username = accountData.username
      newUserAccount.password = accountData.password
      newUserAccount.createdAt = new Date().toLocaleDateString('pt-br');
      newUserAccount.updatedAt = new Date().toLocaleDateString('pt-br');
  
      await this.signUpService.dbAddUserAccount(newUserAccount)

      return res.status(HttpStatus.OK).json({
        message: 'User account created successfully'
      })
  
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to create user account'
      })
    }
  }
}