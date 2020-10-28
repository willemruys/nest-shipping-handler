import { Body, Controller, Post } from '@nestjs/common';
import { PostnlService } from './postnl.service';
import { CreateBarcodeDto } from './create-barcode.dto';

@Controller('postnl')
export class PostnlController {
  constructor(private postnlService: PostnlService) {}
  @Post('barcode')
  async createBarcode(
    @Body() createBarcodeDto: CreateBarcodeDto,
  ): Promise<void> {
    await this.postnlService
      .createBarcode(createBarcodeDto)
      .then(res => {
        return res.data;
      })
      .catch(e => console.error(e));
  }
}
