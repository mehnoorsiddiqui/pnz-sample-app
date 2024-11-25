/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data24, data24Schema } from './data24';
import { Risk2, risk2Schema } from './risk2';

export interface DP2CreatedomesticpaymentconsentresourceRequest {
  data: Data24;
  risk: Risk2;
}

export const dP2CreatedomesticpaymentconsentresourceRequestSchema: Schema<DP2CreatedomesticpaymentconsentresourceRequest> = object(
  {
    data: ['Data', lazy(() => data24Schema)],
    risk: ['Risk', lazy(() => risk2Schema)],
  }
);
