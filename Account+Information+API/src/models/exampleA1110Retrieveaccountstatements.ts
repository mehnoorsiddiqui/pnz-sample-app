/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data154, data154Schema } from './data154';
import { Links, linksSchema } from './links';

export interface ExampleA1110Retrieveaccountstatements {
  data: Data154;
  meta?: unknown;
  links: Links;
}

export const exampleA1110RetrieveaccountstatementsSchema: Schema<ExampleA1110Retrieveaccountstatements> = object(
  {
    data: ['Data', lazy(() => data154Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
