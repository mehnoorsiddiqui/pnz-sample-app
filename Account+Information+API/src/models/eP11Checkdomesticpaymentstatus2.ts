/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data33, data33Schema } from './data33';
import { Links, linksSchema } from './links';
import { Risk, riskSchema } from './risk';

export interface EP11Checkdomesticpaymentstatus2 {
  data: Data33;
  links: Links;
  meta?: unknown;
  risk: Risk;
}

export const eP11Checkdomesticpaymentstatus2Schema: Schema<EP11Checkdomesticpaymentstatus2> = object(
  {
    data: ['Data', lazy(() => data33Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', unknown()],
    risk: ['Risk', lazy(() => riskSchema)],
  }
);