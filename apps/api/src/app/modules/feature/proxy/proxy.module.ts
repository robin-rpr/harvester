import { Module, HttpModule } from '@nestjs/common';
import {ProxyController} from "./controller/proxy/proxy.controller";
import {ProxyService} from "./services/proxy/proxy.service";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    controllers: [
        ProxyController
    ],
    providers: [
        ProxyService
    ],
    exports: [ProxyModule]
})
export class ProxyModule {}
