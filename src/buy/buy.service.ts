import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService2 {
   
  getHealth() {
    return { status: 'ok'};
  }
}
