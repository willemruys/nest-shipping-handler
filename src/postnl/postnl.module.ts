import { HttpModule, Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { PostnlService } from './postnl.service';

import {
  BarcodeRequest,
  BarcodeRequestSchema,
} from '../schemas/barcodeRequests.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BarcodeRequest.name, schema: BarcodeRequestSchema },
    ]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [PostnlService],
})
export class PostnlModule {}
