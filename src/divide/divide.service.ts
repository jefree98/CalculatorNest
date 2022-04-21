import { Injectable } from '@nestjs/common';

@Injectable()
export class DivideService {
    divide(num1: string, num2: string): string{
        const result = parseInt(num1) / parseInt(num2);

        return `The result of ${num1} ÷ ${num2} is: ${result}`;
    }
}
