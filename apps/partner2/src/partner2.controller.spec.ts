import { Test, TestingModule } from '@nestjs/testing';
import { Partner2Controller } from './partner2.controller';
import { Partner2Service } from './partner2.service';

describe('Partner2Controller', () => {
  let partner2Controller: Partner2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Partner2Controller],
      providers: [Partner2Service],
    }).compile();

    partner2Controller = app.get<Partner2Controller>(Partner2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(partner2Controller.getHello()).toBe('Hello World!');
    });
  });
});
