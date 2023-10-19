import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SignUpModule } from '../signup/signup.module';
import { BcryptAdapter } from '../utils';

@Module({
  imports: [SignUpModule],
  controllers: [LoginController],
  providers: [LoginService, BcryptAdapter],
})
export class LoginModule {}
