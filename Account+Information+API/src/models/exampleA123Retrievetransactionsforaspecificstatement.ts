/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data167, data167Schema } from './data167';
import { Links, linksSchema } from './links';

export interface ExampleA123Retrievetransactionsforaspecificstatement {
  data: Data167;
  meta?: unknown;
  links: Links;
}

export const exampleA123RetrievetransactionsforaspecificstatementSchema: Schema<ExampleA123Retrievetransactionsforaspecificstatement> = object(
  {
    data: ['Data', lazy(() => data167Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
