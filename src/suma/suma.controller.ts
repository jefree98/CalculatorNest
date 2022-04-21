import { Controller, Post, Param, Get } from '@nestjs/common';
import { SumaService } from './suma.service';

@Controller('suma')
export class SumaController {
constructor(private readonly sumaService: SumaService) {}

@Get()
getSuma(){
    return 'connected to add';
}

@Post('/:num1/:num2')
Suma(@Param('num1') num1: string, @Param('num2') num2: string):string{
  //return "Hola " + name + " tu tienes "+age+" años de edad "//'Hello $(name) you are $(age) years old';
  return this.sumaService.suma(num1, num2);
 }
}
