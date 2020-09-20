import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Calendar, CalendarId } from '../Calendar/calendar.entity';
import { CalendarItem, CalendarItemId } from './calendar-item.entity';

Injectable();
export class CalendarItemService {
    constructor(
        @InjectRepository(CalendarItem)
        private calendarItemRepository: Repository<CalendarItem>,
    ) {}

    async findAllInRange(start: string, end: string): Promise<CalendarItem[]> {
        return this.calendarItemRepository.find({
            where: {
                date: Between(start, end),
            },
        });
    }

    async findAll(): Promise<CalendarItem[]> {
        return this.calendarItemRepository.find();
    }

    async findByCalendar(id: CalendarId): Promise<CalendarItem[]> {
        return this.calendarItemRepository.find({
            where: { calendar: id },
        });
    }

    async findByCalendarInRange(calendar: CalendarId, start: string, end: string): Promise<CalendarItem[]> {
        return this.calendarItemRepository.find({
            where: { calendar, date: Between(start, end) },
        });
    }

    async findByDate(date: string): Promise<CalendarItem[]> {
        return this.calendarItemRepository.find({ where: { date } });
    }

    async findById(id: CalendarItemId): Promise<CalendarItem> {
        return this.calendarItemRepository.findOneOrFail(id);
    }

    async create(createCalItemDto: {
        calendar: Calendar;
        date: string;
        description: string;
        title: string;
    }): Promise<CalendarItem> {
        return this.calendarItemRepository.save(createCalItemDto);
    }
}
