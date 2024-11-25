/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data83, data83Schema } from './data83';
import { Links, linksSchema } from './links';

export interface AC123Retrievetransactionsforaspecificstatement2 {
  data: Data83;
  meta?: unknown;
  links: Links;
}

export const aC123Retrievetransactionsforaspecificstatement2Schema: Schema<AC123Retrievetransactionsforaspecificstatement2> = object(
  {
    data: ['Data', lazy(() => data83Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
