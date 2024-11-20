/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data3, data3Schema } from './data3';
import { Links, linksSchema } from './links';

export interface AC102Retrievebulkbalances2 {
  data: Data3;
  meta?: unknown;
  links: Links;
}

export const aC102Retrievebulkbalances2Schema: Schema<AC102Retrievebulkbalances2> = object(
  {
    data: ['Data', lazy(() => data3Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);