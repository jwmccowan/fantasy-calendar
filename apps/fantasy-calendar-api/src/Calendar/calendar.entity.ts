import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CalendarItem } from '../CalendarItem/calendar-item.entity';
import { Brand } from '../utils';

export type CalendarId = Brand<string, 'CalendarId'>;

@ObjectType()
@Entity({ name: 'calendar' })
export class Calendar {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  public id!: CalendarId;

  @Field()
  @Column({ length: 500, nullable: false })
  public title!: string;

  @Field(() => [CalendarItem], { nullable: true })
  @OneToMany(() => CalendarItem, (calItem) => calItem.calendar)
  public calItems!: CalendarItem[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
