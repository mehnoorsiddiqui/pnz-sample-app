/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data5, data5Schema } from './data5';
import { Links, linksSchema } from './links';
import { Meta, metaSchema } from './meta';

export interface AC104Retrievebulkdirectdebits {
  data: Data5;
  links: Links;
  meta: Meta;
}

export const aC104RetrievebulkdirectdebitsSchema: Schema<AC104Retrievebulkdirectdebits> = object(
  {
    data: ['Data', lazy(() => data5Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);
