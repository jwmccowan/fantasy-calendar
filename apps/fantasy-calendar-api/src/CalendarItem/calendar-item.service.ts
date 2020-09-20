import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar, CalendarId } from '../Calendar/calendar.entity';
import { CalendarItem, CalendarItemId } from './calendar-item.entity';

Injectable();
export class CalendarItemService {
  constructor(
    @InjectRepository(CalendarItem)
    private calendarItemRepository: Repository<CalendarItem>,
  ) {}

  async findAll(): Promise<CalendarItem[]> {
    return this.calendarItemRepository.find();
  }

  async findByCalendar(id: CalendarId): Promise<CalendarItem[]> {
    return this.calendarItemRepository.find({
      where: { calendar: id },
    });
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
