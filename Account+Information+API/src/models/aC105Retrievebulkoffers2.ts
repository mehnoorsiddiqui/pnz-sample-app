/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data78, data78Schema } from './data78';
import { Links, linksSchema } from './links';

export interface AC105Retrievebulkoffers2 {
  data: Data78;
  meta?: unknown;
  links: Links;
}

export const aC105Retrievebulkoffers2Schema: Schema<AC105Retrievebulkoffers2> = object(
  {
    data: ['Data', lazy(() => data78Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);