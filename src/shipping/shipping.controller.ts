import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { PostnlService } from '../postnl/postnl.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shipping')
export class ShippingController {
  constructor(private postnlService: PostnlService) {}
  @UseGuards(JwtAuthGuard) // guarding the root
  @Post('barcode')
  async postBarcode(
    @Req()
    request: Request,
  ): Promise<string> {
    try {
      const res = (await this.postnlService.createBarcode(request.body)).data;
      //   await this.postnlService.createLog(request.body);
      return res.Barcode;
    } catch (err) {
      switch (err.response.status) {
        case 403:
          throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        case 401:
          throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
        default:
          return err.response.status;
      }
    }
  }
}
