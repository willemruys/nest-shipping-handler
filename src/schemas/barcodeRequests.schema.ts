import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BarcodeRequestDocument = BarcodeRequest & Document;

@Schema()
export class BarcodeRequest {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop()
  customerCode: string;

  @Prop()
  customerNumber: string;

  @Prop()
  type: string;

  @Prop()
  timestamp: string;
}

export const BarcodeRequestSchema = SchemaFactory.createForClass(
  BarcodeRequest,
);
