import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { SignUpModule } from '../signup/signup.module';
import { BcryptAdapter } from '../utils';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from '../constants';

@Module({
  imports: [
    SignUpModule,
    JwtModule.register({
      global: true,
      secret: jwtContants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, BcryptAdapter],
})
export class LoginModule {}
