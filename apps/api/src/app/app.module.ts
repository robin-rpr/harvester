import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from "./modules/core/auth/auth.module";
import {UserModule} from "./modules/core/user/user.module";
import {ActionsModule} from "./modules/feature/actions/actions.module";
import {ProjectModule} from "./modules/feature/project/project.module";
import {ProxyModule} from "./modules/feature/proxy/proxy.module";
import {TelemetryModule} from "./modules/feature/telemetry/telemetry.module";
import {RabbitMqModule} from "./modules/shared/rabbit-mq/rabbit-mq.module";

@Module({
  imports: [
      AuthModule,
      UserModule,
      ActionsModule,
      ProjectModule,
      ProxyModule,
      TelemetryModule,
      RabbitMqModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
