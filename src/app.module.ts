import { Module } from '@nestjs/common';
import { LoginModule } from './domain/login/login.module';

@Module({
  imports: [LoginModule],
})

export class AppModule {}
