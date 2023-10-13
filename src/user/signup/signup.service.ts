import { Injectable } from '@nestjs/common';
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

  async dbAddUserAccount(accountData: SignUpEntity) {
    const hashedPassword = await this.bcryptAdapter.encrypt(accountData.password)
    accountData.password = hashedPassword
    await this.signUpRepository.save(accountData)
      
  }
}