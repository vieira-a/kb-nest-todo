import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { SignUpModule } from '../signup/signup.module';

@Module({
  imports: [SignUpModule],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
