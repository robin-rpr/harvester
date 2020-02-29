import {Controller, Get, Param, Req, Res, Query} from '@nestjs/common';
import {IncomingMessage, ServerResponse, OutgoingHttpHeaders} from 'http';
import {map} from 'rxjs/operators';
import * as http from 'http';
import {ProxyService} from '../../services/proxy/proxy.service';

@Controller('proxy')
export class ProxyController {
    constructor(private readonly  proxyService: ProxyService) {
    }

    @Get()
    async getPage(
        @Query('url') url: string,
        @Res() res
    ): Promise<any> {
        let injectJS = `
            function test() {
                // code ...
            }
            
            test();
            `;
        this.proxyService.getPage(url, injectJS)
            .subscribe(chunk => {
                res.status(chunk.status).send(chunk.data);
            });
    }

    @Get('asset')
    async getAsset(
        @Query('url') url: string,
        @Res() res
    ): Promise<any> {
        console.log(encodeURI(url));
        this.proxyService.getAsset(encodeURI(url)).subscribe(chunk => {
            res.status(chunk.status).send(chunk.data);
        });
    }
}
