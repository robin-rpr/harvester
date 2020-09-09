import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { Message } from '@harvester/api-interfaces';

import { AppService } from './app.service';
import {MiddlewareInterceptor} from './interceptors/middleware.interceptor';

@Controller()
@UseInterceptors(MiddlewareInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getData(): Message {
    return this.appService.getStatus();
  }
}
