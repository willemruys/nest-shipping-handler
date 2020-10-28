import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import { ShippingController } from './shipping/shipping.controller';
import { ShippingModule } from './shipping/shipping.module';
import { StatusModule } from './status/status.module';
import { PostnlService } from './postnl/postnl.service';
import { PostnlController } from './postnl/postnl.controller';
import { PostnlModule } from './postnl/postnl.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ShippingModule,
    StatusModule,
    PostnlModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/test'),
  ],
  controllers: [
    AppController,
    StatusController,
    ShippingController,
    PostnlController,
  ],
  providers: [AppService, PostnlService],
})
export class AppModule {}
