import { Injectable } from '@nestjs/common';

@Injectable()
export class Partner2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
