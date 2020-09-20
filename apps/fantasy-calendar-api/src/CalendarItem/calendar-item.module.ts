import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarModule } from '../Calendar/calendar.module';
import { CalendarItem } from './calendar-item.entity';
import { CalendarItemResolver } from './calendar-item.resolver';
import { CalendarItemService } from './calendar-item.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalendarItem]),
    forwardRef(() => CalendarModule),
  ],
  providers: [CalendarItemService, CalendarItemResolver],
  exports: [CalendarItemService],
})
export class CalendarItemModule {}
