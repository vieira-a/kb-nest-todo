import {
  Controller,
  Post,
  Request,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { ProfileService } from './profile.service';
import { Response } from 'express';
import { extractToken } from '../utils';

@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Post()
  async getUserProfile(@Request() request: Request, @Res() res: Response) {
    try {
      const token = extractToken(request);
      const userAccount = await this.profileService.loadUserProfile(token);
      return res.status(HttpStatus.OK).json({
        message: 'User data loaded successfully',
        data: userAccount,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        return res
          .status(error.getStatus())
          .json({ error: error.getResponse() });
      } else {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Failed to load user data', error });
      }
    }
  }
}
