/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data24, data24Schema } from './data24';
import { Risk, riskSchema } from './risk';

export interface DP2CreatedomesticpaymentconsentresourceRequest2 {
  data: Data24;
  risk: Risk;
}

export const dP2CreatedomesticpaymentconsentresourceRequest2Schema: Schema<DP2CreatedomesticpaymentconsentresourceRequest2> = object(
  {
    data: ['Data', lazy(() => data24Schema)],
    risk: ['Risk', lazy(() => riskSchema)],
  }
);
