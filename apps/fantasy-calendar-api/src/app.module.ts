import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarModule } from './Calendar/calendar.module';
import { CalendarItemModule } from './CalendarItem/calendar-item.module';

@Module({
  imports: [
    CalendarModule,
    CalendarItemModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      entities: ['dist/**/*.entity.js'],
      logging: ['error', 'warn'],
      migrations: [],
      synchronize: false,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'fantasy-cal',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
