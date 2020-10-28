import { HttpService, Injectable } from '@nestjs/common';

import { BarcodeInput, BarcodeResponse } from './postnl.interface';

import { AxiosResponse } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import {
  BarcodeRequest,
  BarcodeRequestDocument,
} from '../schemas/barcodeRequests.schema';
import { Model } from 'mongoose';
import { CreateBarcodeDto } from './create-barcode.dto';

@Injectable()
export class PostnlService {
  constructor(
    private httpService: HttpService, // @InjectModel(BarcodeRequest.name)
  ) // private barcodeRequestModel: Model<BarcodeRequestDocument>,
  {}

  createBarcode(
    barcodeInput: BarcodeInput,
  ): Promise<AxiosResponse<BarcodeResponse>> {
    console.log(barcodeInput);

    return this.httpService
      .get('https://api-sandbox.postnl.nl/shipment/v1_1/barcode', {
        params: {
          CustomerCode: barcodeInput.CustomerCode,
          CustomerNumber: barcodeInput.CustomerNumber,
          Type: barcodeInput.Type,
        },
        headers: {
          apikey: barcodeInput.apikey,
        },
      })
      .toPromise();
  }

  //   async createLog(createBarcodeDto: CreateBarcodeDto): Promise<BarcodeRequest> {
  //     const createLog = new this.barcodeRequestModel(createBarcodeDto);
  //     return createLog.save();
  //   }
}
