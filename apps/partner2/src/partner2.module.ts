import { Module } from '@nestjs/common';
import { Partner2Controller } from './partner2.controller';
import { Partner2Service } from './partner2.service';

@Module({
  imports: [],
  controllers: [Partner2Controller],
  providers: [Partner2Service],
})
export class Partner2Module {}
