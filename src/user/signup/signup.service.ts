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
  
  async dbCheckUserEmailExists(email: string) {
    const userAccount = await this.signUpRepository.findOne({
      where: [{ email: email }]
    });
    return !!userAccount;
  }

  async dbAddUserAccount(accountData: SignUpEntity) {

    const userEmailAlreadyExists = await this.dbCheckUserEmailExists(accountData.email)

    if(userEmailAlreadyExists) {
      throw new BadRequestException('Email já cadastrado')
    } 

    const hashedPassword = await this.bcryptAdapter.encrypt(accountData.password)
      accountData.password = hashedPassword
      await this.signUpRepository.save(accountData)
  }
}