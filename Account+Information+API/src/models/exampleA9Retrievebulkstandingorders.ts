/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data153, data153Schema } from './data153';
import { Links, linksSchema } from './links';

export interface ExampleA9Retrievebulkstandingorders {
  data: Data153;
  meta?: unknown;
  links: Links;
}

export const exampleA9RetrievebulkstandingordersSchema: Schema<ExampleA9Retrievebulkstandingorders> = object(
  {
    data: ['Data', lazy(() => data153Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
