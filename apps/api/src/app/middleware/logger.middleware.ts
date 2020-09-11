import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        const { ip, method, originalUrl: url  } = req;
        const hostname = require('os').hostname();
        const userAgent = req.get('user-agent') || '';
        const referer = req.get('referer') || '';
        const subdomain = req.get('x-subdomain') || '';
        const uri = req.get('x-uri') || '';

        res.on('close', () => {
            const { statusCode, statusMessage } = res;
            const contentLength = res.get('content-length');
            console.log(`[REQUEST][${hostname}] "${method} ${url}" ${statusCode} ${statusMessage} ${contentLength} "${referer}" "${userAgent}" "${ip}" "x-subdomain: ${subdomain}" "x-uri: ${uri}"`);
        });

        next();
    }
}

