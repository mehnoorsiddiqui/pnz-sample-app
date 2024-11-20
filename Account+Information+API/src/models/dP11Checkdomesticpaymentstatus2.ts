/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data27, data27Schema } from './data27';
import { Links, linksSchema } from './links';
import { Risk, riskSchema } from './risk';

export interface DP11Checkdomesticpaymentstatus2 {
  data: Data27;
  links: Links;
  meta?: unknown;
  risk: Risk;
}

export const dP11Checkdomesticpaymentstatus2Schema: Schema<DP11Checkdomesticpaymentstatus2> = object(
  {
    data: ['Data', lazy(() => data27Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', unknown()],
    risk: ['Risk', lazy(() => riskSchema)],
  }
);
