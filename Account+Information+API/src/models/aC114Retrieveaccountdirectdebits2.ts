/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data5, data5Schema } from './data5';
import { Links, linksSchema } from './links';

export interface AC114Retrieveaccountdirectdebits2 {
  data: Data5;
  meta?: unknown;
  links: Links;
}

export const aC114Retrieveaccountdirectdebits2Schema: Schema<AC114Retrieveaccountdirectdebits2> = object(
  {
    data: ['Data', lazy(() => data5Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
