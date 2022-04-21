import { Controller, Get, Post, Param } from '@nestjs/common';
import { DivideService } from './divide.service';

@Controller('divide')
export class DivideController {
    constructor(private readonly divideService: DivideService){}

    @Get()
    getDivide(){
        return 'conected to divide';
    }

    @Post('/:num1/:num2')
    Divide(@Param('num1') num1: string, @Param('num2') num2: string):string{
      return this.divideService.divide(num1, num2);
     }
}
