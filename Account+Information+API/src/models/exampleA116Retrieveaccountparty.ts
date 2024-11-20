/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data151, data151Schema } from './data151';
import { Links, linksSchema } from './links';

export interface ExampleA116Retrieveaccountparty {
  data: Data151;
  meta?: unknown;
  links: Links;
}

export const exampleA116RetrieveaccountpartySchema: Schema<ExampleA116Retrieveaccountparty> = object(
  {
    data: ['Data', lazy(() => data151Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);