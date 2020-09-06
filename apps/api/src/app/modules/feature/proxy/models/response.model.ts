import {HttpStatus} from '@nestjs/common';

export interface ProxyResponse {
    status: HttpStatus;
    data: any;
}
