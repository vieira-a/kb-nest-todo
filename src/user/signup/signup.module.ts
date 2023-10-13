import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpEntity } from './entities/signup.entity';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';
import { BcryptAdapter } from '../utils/bcrypt-adapter';

@Module({
  imports: [TypeOrmModule.forFeature([SignUpEntity])],
  controllers: [SignUpController],
  providers: [SignUpService, BcryptAdapter],
})
export class SignUpModule {}
