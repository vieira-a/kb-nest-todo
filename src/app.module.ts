import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.service';
import { TaskModule } from './task/task.module';
import { SignUpModule } from './user/signup/signup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    TaskModule,
    SignUpModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
