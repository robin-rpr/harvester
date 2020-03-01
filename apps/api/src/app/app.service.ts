import { Injectable } from '@nestjs/common';
import { Message } from '@harvester/api-interfaces';

@Injectable()
export class AppService {
  getStatus(): Message {
    return { message: 'READY' }; // TODO: Check API Health
  }
}
