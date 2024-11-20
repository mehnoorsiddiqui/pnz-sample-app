/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data80, data80Schema } from './data80';
import { Links, linksSchema } from './links';

export interface AC117Retrieveaccountscheduledpayments2 {
  data: Data80;
  meta?: unknown;
  links: Links;
}

export const aC117Retrieveaccountscheduledpayments2Schema: Schema<AC117Retrieveaccountscheduledpayments2> = object(
  {
    data: ['Data', lazy(() => data80Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
