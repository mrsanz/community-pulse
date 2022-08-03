import { Resolver, Query, Args } from '@nestjs/graphql';
// import { EventRole } from './event-role.model';
import { Event } from './event.model';

@Resolver()
export class EventResolver {
  @Query(() => Event)
  getEventPulse(@Args('id', { nullable: true }) id?: number): Event {
    return {
      id,
      eventName: 'Something',
      roles: [],
    };
  }
}
