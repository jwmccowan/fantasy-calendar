import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Calendar } from '../Calendar/calendar.entity';
import { Brand } from '../utils';

export type CalendarItemId = Brand<string, 'CalendarItemId'>;

@ObjectType()
@Entity({ name: 'calendar-item ' })
export class CalendarItem {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  public id!: CalendarItemId;

  @Field()
  @Column({ length: 500, nullable: false })
  public title!: string;

  @Field()
  @Column({ length: 500, nullable: false })
  public description!: string;

  @Field()
  @Column({ length: 10, nullable: false })
  public date!: string;

  @Field(() => Calendar, { nullable: false })
  @ManyToOne(() => Calendar, (calendar) => calendar.calItems)
  public calendar!: Calendar;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
