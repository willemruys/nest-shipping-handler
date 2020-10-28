export interface BarcodeInput {
  apikey: string;
  CustomerCode: string;
  CustomerNumber: string;
  Type: '2S' | '3S' | 'CC' | 'CP' | 'CD' | 'CF' | 'LA';
  Serie: string;
  Range: string;
}

export interface BarcodeResponse {
  Barcode: string;
}
