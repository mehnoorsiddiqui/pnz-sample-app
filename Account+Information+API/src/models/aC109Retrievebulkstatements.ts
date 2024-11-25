/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data10, data10Schema } from './data10';
import { Links, linksSchema } from './links';
import { Meta, metaSchema } from './meta';

export interface AC109Retrievebulkstatements {
  data: Data10;
  links: Links;
  meta: Meta;
}

export const aC109RetrievebulkstatementsSchema: Schema<AC109Retrievebulkstatements> = object(
  {
    data: ['Data', lazy(() => data10Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);
