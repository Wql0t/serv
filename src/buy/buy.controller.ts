import { Controller, Post } from '@nestjs/common';
import { AppService2 } from './buy.service';
@Controller('buy')
export class BuyController {
    constructor(private readonly buyService: AppService2) {}
    @Post()
    health() {
        return this.buyService.getHealth();
    }


}
