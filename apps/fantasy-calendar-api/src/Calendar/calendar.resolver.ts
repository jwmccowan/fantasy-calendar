import { Inject } from '@nestjs/common';
import {
  Args,
  Parent,
  ResolveField,
  Resolver,
  Query,
  Mutation,
} from '@nestjs/graphql';
import { CalendarItem } from '../CalendarItem/calendar-item.entity';
import { CalendarItemService } from '../CalendarItem/calendar-item.service';
import { Calendar, CalendarId } from './calendar.entity';
import { CalendarService } from './calendar.service';

@Resolver(() => Calendar)
export class CalendarResolver {
  constructor(
    @Inject(CalendarService) private calendarService: CalendarService,
    @Inject(CalendarItemService)
    private calendarItemService: CalendarItemService,
  ) {}

  @Query(() => Calendar)
  async calendar(@Args('id') id: CalendarId): Promise<Calendar> {
    return this.calendarService.findById(id);
  }

  @ResolveField(() => [CalendarItem])
  async calItems(@Parent() calendar: Calendar): Promise<CalendarItem[]> {
    const { id } = calendar;
    return this.calendarItemService.findByCalendar(id);
  }

  @Query(() => [Calendar])
  async calendars(): Promise<Calendar[]> {
    return this.calendarService.findAll();
  }

  @Mutation(() => Calendar)
  async createCalendar(@Args('title') title: string): Promise<Calendar> {
    return this.calendarService.create({ title });
  }
}
