import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { applicationConfig } from 'config/configuration';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string(),
        DATABASE_POST: Joi.string(),
        DATABASE_NAME: Joi.string(),
        DATABASE_USER: Joi.string(),
        DATABASE_PASSWORD: Joi.string(),
        PORT: Joi.number().default(5050),
        ENV: Joi.string()
          .valid('development', 'base', 'beta', 'qa')
          .default('development'),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: applicationConfig.db.host,
      port: parseInt(applicationConfig.db.port),
      username: applicationConfig.db.user,
      password: applicationConfig.db.password,
      database: applicationConfig.db.name,
      entities: [],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
