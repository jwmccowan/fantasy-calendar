import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar, CalendarId } from './calendar.entity';

@Injectable()
export class CalendarService {
    constructor(
        @InjectRepository(Calendar)
        private calendarRepository: Repository<Calendar>,
    ) {}

    findAll(): Promise<Calendar[]> {
        return this.calendarRepository.find();
    }

    findById(id: CalendarId): Promise<Calendar> {
        return this.calendarRepository.findOneOrFail(id);
    }

    create(createCalDto: { title: string }): Promise<Calendar> {
        return this.calendarRepository.save(createCalDto);
    }
}
