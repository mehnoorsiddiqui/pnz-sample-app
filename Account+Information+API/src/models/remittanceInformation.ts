/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Reference6, reference6Schema } from './reference6';

export interface RemittanceInformation {
  reference: Reference6;
}

export const remittanceInformationSchema: Schema<RemittanceInformation> = object(
  { reference: ['Reference', lazy(() => reference6Schema)] }
);
