import { Module } from '@nestjs/common';
import { SumaController } from './suma.controller';
import { SumaService } from './suma.service';
import { AppModule } from 'src/app.module';


@Module({
    imports: [SumaModule],
    controllers: [SumaController],
    providers: [SumaService],
})
export class SumaModule {}
