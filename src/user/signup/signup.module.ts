import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpEntity } from './entities/signup.entity';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';
import { BcryptAdapter } from '../utils';

@Module({
  imports: [TypeOrmModule.forFeature([SignUpEntity])],
  controllers: [SignUpController],
  providers: [SignUpService, BcryptAdapter],
  exports: [SignUpService],
})
export class SignUpModule {}
