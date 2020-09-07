import {Controller, Get, Param, Req, Res, Query, Headers, Header} from '@nestjs/common';
import {ProxyService} from '../../services/proxy/proxy.service';
import {ProxyResponse} from '../../models/response.model';

@Controller('proxy')
export class ProxyController {
    constructor(private readonly  proxyService: ProxyService) {
    }

    @Get('*')
    async get(
        @Headers('x-subdomain') subdomain: string,
        @Headers('x-uri') uri: string,
        @Res() res
    ): Promise<any> {
        const injectJS = `
        function test() {
            alert('Hello World!');
            console.log('Hello World from Proxy!');
        }

        test();
        `;

        this.proxyService.get(uri, subdomain, injectJS)
        .then((proxy: ProxyResponse) => {
            res.set(proxy.headers);
            res.set('Access-Control-Allow-Origin', '*')
            res.status(proxy.status).send(proxy.data);
        })
        .catch((err: any) => {
            res.status(err.status).send(err.data);
        })

    }
}
