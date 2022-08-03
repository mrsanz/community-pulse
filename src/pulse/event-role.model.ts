import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Person } from './event-person.model';

@ObjectType()
export class EventRole {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  roleName: string;

  @Field(type => Person)
  person: Person;
}
