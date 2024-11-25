/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  DeliveryAddress48,
  deliveryAddress48Schema,
} from './deliveryAddress48';
import { GeoLocation, geoLocationSchema } from './geoLocation';

export interface Risk48 {
  geoLocation: GeoLocation;
  merchantCategoryCode: string;
  endUserAppVersion: string;
  deliveryAddress: DeliveryAddress48;
  merchantCustomerIdentification: string;
  merchantName: string;
  endUserAppName: string;
  merchantNZBN: string;
  paymentContextCode: string;
}

export const risk48Schema: Schema<Risk48> = object({
  geoLocation: ['GeoLocation', lazy(() => geoLocationSchema)],
  merchantCategoryCode: ['MerchantCategoryCode', string()],
  endUserAppVersion: ['EndUserAppVersion', string()],
  deliveryAddress: ['DeliveryAddress', lazy(() => deliveryAddress48Schema)],
  merchantCustomerIdentification: ['MerchantCustomerIdentification', string()],
  merchantName: ['MerchantName', string()],
  endUserAppName: ['EndUserAppName', string()],
  merchantNZBN: ['MerchantNZBN', string()],
  paymentContextCode: ['PaymentContextCode', string()],
});
