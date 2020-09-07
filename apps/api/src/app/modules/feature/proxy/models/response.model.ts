import {HttpStatus} from '@nestjs/common';

export interface ProxyResponse {
    status: HttpStatus;
    headers: Headers;
    data: any;
}
