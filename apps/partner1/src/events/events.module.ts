/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EventsCoreModule} from '@app/core/events/events-core.module';
import { EventsController } from './events.controller';
//import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [EventsCoreModule],
  controllers: [EventsController],
})
export class EventsModule {}
