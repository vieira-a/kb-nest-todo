import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { BcryptAdapter } from '../utils';
import { SignUpService } from '../signup/signup.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private readonly signUpService: SignUpService,
    private readonly bcryptAdapter: BcryptAdapter,
    private jwtService: JwtService,
  ) {}

  async getToken(loginData: LoginDto) {
    const userAccount = await this.signUpService.dbLoadUserAccount(
      loginData.username,
    );
    const isValid = await this.bcryptAdapter.checkPassword(
      loginData.password,
      userAccount.password,
    );
    if (!isValid) {
      throw new UnauthorizedException('Senha incorreta');
    }
    const payload = { id: userAccount.id };
    return await this.jwtService.signAsync(payload);
  }
}
