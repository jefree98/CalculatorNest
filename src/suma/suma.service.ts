import { Injectable } from '@nestjs/common';
@Injectable()
export class SumaService {
    suma(num1: string, num2: string): string{
      const result = parseInt(num1) + parseInt(num2);
     /* interface iResult{
        result: number;
        message: string;
      }
      function printAdd(resultEquals: iResult){
        return `The result of ${num1} + ${num2} is: ${result}`
      };*/
      return `The result of ${num1} + ${num2} is: ${result}`;
      } 
}
