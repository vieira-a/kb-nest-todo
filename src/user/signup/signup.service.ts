import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpEntity } from './entities/signup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
  constructor(
    @InjectRepository(SignUpEntity)
    private signUpRepository: Repository<SignUpEntity>
  ) {}

  async dbAddUserAccount(accountData: SignUpEntity) {
    this.signUpRepository.save(accountData)
  }
}