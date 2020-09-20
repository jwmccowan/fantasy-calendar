import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarItemModule } from '../CalendarItem/calendar-item.module';
import { Calendar } from './calendar.entity';
import { CalendarResolver } from './calendar.resolver';
import { CalendarService } from './calendar.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Calendar]),
    forwardRef(() => CalendarItemModule),
  ],
  providers: [CalendarService, CalendarResolver],
  exports: [CalendarService],
})
export class CalendarModule {}
