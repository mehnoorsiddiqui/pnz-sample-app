/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data3, data3Schema } from './data3';
import { Links, linksSchema } from './links';

export interface AC112Retrieveaccountbalance2 {
  data: Data3;
  meta?: unknown;
  links: Links;
}

export const aC112Retrieveaccountbalance2Schema: Schema<AC112Retrieveaccountbalance2> = object(
  {
    data: ['Data', lazy(() => data3Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
