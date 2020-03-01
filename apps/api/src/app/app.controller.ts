import { Controller, Get } from '@nestjs/common';

import { Message } from '@harvester/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getData(): Message {
    return this.appService.getStatus();
  }
}
