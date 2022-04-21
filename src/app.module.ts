import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumaController } from './suma/suma.controller';
import { SumaModule } from './suma/suma.module';
import { SumaService } from './suma/suma.service';
import { RestaController } from './resta/resta.controller';
import { RestaService } from './resta/resta.service';
import { RestaModule } from './resta/resta.module';
import { MultiplyController } from './multiply/multiply.controller';
import { MultiplyModule } from './multiply/multiply.module';
import { MultiplyService } from './multiply/multiply.service';
import { DivideController } from './divide/divide.controller';
import { DivideModule } from './divide/divide.module';
import { DivideService } from './divide/divide.service';

@Module({
  imports: [SumaModule, RestaModule, MultiplyModule, DivideModule],
  controllers: [AppController, SumaController, RestaController, MultiplyController, DivideController],
  providers: [AppService, SumaService, RestaService, MultiplyService, DivideService],
})
export class AppModule {}
