import { Controller, Get } from '@nestjs/common';
import { Partner2Service } from './partner2.service';

@Controller()
export class Partner2Controller {
  constructor(private readonly partner2Service: Partner2Service) {}

  @Get()
  getHello(): string {
    return this.partner2Service.getHello();
  }
}
