import { Controller, Get, Post, Param } from '@nestjs/common';
import { RestaService } from './resta.service';

@Controller('resta')
export class RestaController {
constructor(private readonly restaService: RestaService) {}

    @Get()
    getResta(){
        return 'connected to subtract';
    }

    @Post('/:num1/:num2')
    Resta(@Param('num1') num1: string, @Param('num2') num2: string):string{ 
    return this.restaService.resta(num1, num2);
 }
}
