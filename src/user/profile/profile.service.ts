import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileDto } from './dto/profile.dto';
import { SignUpService } from '../signup/signup.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly signUpService: SignUpService,
  ) {}

  async loadUserProfile(token: string): Promise<ProfileDto> {
    const payload = await this.jwtService.verifyAsync(token);
    const userAccount = await this.signUpService.dbLoadUserAccountById(
      payload.id,
    );
    return {
      id: userAccount.id,
      name: userAccount.name,
      username: userAccount.username,
      email: userAccount.email,
      createdAt: userAccount.createdAt,
      updatedAt: userAccount.updatedAt,
    };
  }
}
