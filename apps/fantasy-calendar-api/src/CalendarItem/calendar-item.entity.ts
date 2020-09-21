import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
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
  @Index()
  public date!: string;

  @Field(() => Calendar, { nullable: false })
  @ManyToOne(() => Calendar, (calendar) => calendar.calItems)
  public calendar!: Calendar;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field()
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
