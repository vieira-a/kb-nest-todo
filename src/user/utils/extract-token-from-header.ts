import { BadRequestException } from '@nestjs/common';
import { Request } from '@nestjs/common';

export const extractToken = (request: Request) => {
  const token = request.headers['authorization']?.split(' ')[1];
  if (typeof token !== 'string' || token.length === 0) {
    throw new BadRequestException('Invalid token format');
  }
  return token;
};
