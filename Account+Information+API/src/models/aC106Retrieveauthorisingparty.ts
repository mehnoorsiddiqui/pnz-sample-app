/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data7, data7Schema } from './data7';
import { Links, linksSchema } from './links';

export interface AC106Retrieveauthorisingparty {
  data: Data7;
  meta?: unknown;
  links: Links;
}

export const aC106RetrieveauthorisingpartySchema: Schema<AC106Retrieveauthorisingparty> = object(
  {
    data: ['Data', lazy(() => data7Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
