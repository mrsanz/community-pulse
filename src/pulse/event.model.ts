import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EventRole } from './event-role.model';

@ObjectType()
export class Event {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  eventName: string;

  @Field(type => [EventRole], {nullable: 'items'})
  roles: EventRole[];
}
