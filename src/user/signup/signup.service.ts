import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpEntity } from './entities/signup.entity';
import { Repository } from 'typeorm';
import { BcryptAdapter } from '../utils/bcrypt-adapter';

@Injectable()
export class SignUpService {
  
  constructor(
    @InjectRepository(SignUpEntity)
    private readonly signUpRepository: Repository<SignUpEntity>,
    private readonly bcryptAdapter: BcryptAdapter
  ) {}
  
  async dbCheckUserAccount(field: string, value: string) {
    const userAccount = await this.signUpRepository.findOne({
      where: { [field ]: value }
    });
    return !!userAccount
  }

  async dbAddUserAccount(accountData: SignUpEntity) {

    const userEmailAlreadyExists = await this.dbCheckUserAccount('email', accountData.email)
    const userNameAlreadyExists = await this.dbCheckUserAccount('username', accountData.username)

    if(userEmailAlreadyExists) {
      throw new BadRequestException('Email já cadastrado')
    } 

    if(userNameAlreadyExists) {
      throw new BadRequestException('Nome de usuário já cadastrado')
    } 

    const hashedPassword = await this.bcryptAdapter.encrypt(accountData.password)
      accountData.password = hashedPassword
      await this.signUpRepository.save(accountData)
  }
}