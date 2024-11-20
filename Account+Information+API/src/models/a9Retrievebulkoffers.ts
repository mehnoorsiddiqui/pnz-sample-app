/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data150, data150Schema } from './data150';
import { Links, linksSchema } from './links';

export interface A9Retrievebulkoffers {
  data: Data150;
  meta?: unknown;
  links: Links;
}

export const a9RetrievebulkoffersSchema: Schema<A9Retrievebulkoffers> = object({
  data: ['Data', lazy(() => data150Schema)],
  meta: ['Meta', unknown()],
  links: ['Links', lazy(() => linksSchema)],
});
