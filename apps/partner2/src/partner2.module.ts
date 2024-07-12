import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './events/eventos.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.partner2',
    }),
    PrismaModule,
    EventosModule,
    LugaresModule
  ],
})
export class Partner2Module {}
