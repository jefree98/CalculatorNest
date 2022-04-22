import { Controller, Post, Param, Get } from '@nestjs/common';
import { iWrapperResponse } from 'src/app.types';
import { SumaService } from './suma.service';

@Controller('suma')
export class SumaController {
  constructor(private readonly sumaService: SumaService) {}

  @Get()
  getSuma() {
    return 'connected to add';
  }

  @Post('/:num1/:num2')
  suma(
    @Param('num1') num1: string,
    @Param('num2') num2: string,
  ): iWrapperResponse {
    return this.sumaService.suma(num1, num2);
  }
}
