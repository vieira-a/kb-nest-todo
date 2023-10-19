import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { PayloadDto } from '../profile/dto/payload.dto';

export class JwtAdapter {
  constructor(
    private jwtService: JwtService,
    private secret: string = jwtConstants.secret,
  ) {}

  async getPayload(token: string): Promise<PayloadDto> {
    try {
      const payload: PayloadDto = await this.jwtService.verifyAsync(token, {
        secret: this.secret,
      });
      return payload;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
