import { Inject } from '@nestjs/common';
import { Args, Resolver, Query, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Calendar, CalendarId } from '../Calendar/calendar.entity';
import { CalendarService } from '../Calendar/calendar.service';
import { CalendarItem, CalendarItemId } from './calendar-item.entity';
import { CalendarItemService } from './calendar-item.service';

@Resolver(() => CalendarItem)
export class CalendarItemResolver {
    constructor(
        @Inject(CalendarService) private calendarService: CalendarService,
        @Inject(CalendarItemService)
        private calendarItemService: CalendarItemService,
    ) {}

    @Query(() => CalendarItem)
    async calendarItem(@Args('id') id: CalendarItemId): Promise<CalendarItem> {
        return this.calendarItemService.findById(id);
    }

    @ResolveField(() => Calendar)
    async calendar(@Parent() calendarItem: CalendarItem): Promise<Calendar> {
        const { calendar } = calendarItem;
        return this.calendarService.findById(calendar.id);
    }

    @Query(() => [CalendarItem])
    async calendarItems(@Args('start') start: string, @Args('end') end: string): Promise<CalendarItem[]> {
        return this.calendarItemService.findAllInRange(start, end);
    }

    @Query(() => [CalendarItem])
    async calendarItemsByDate(@Args('date') date: string): Promise<CalendarItem[]> {
        return this.calendarItemService.findByDate(date);
    }

    @Mutation(() => CalendarItem)
    async createCalendarItem(
        @Args('date') date: string,
        @Args('calendar') calendarId: CalendarId,
        @Args('description') description: string,
        @Args('title') title: string,
    ): Promise<CalendarItem> {
        const calendar = await this.calendarService.findById(calendarId);
        return this.calendarItemService.create({
            calendar,
            date,
            description,
            title,
        });
    }
}
