/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data86, data86Schema } from './data86';
import { Links, linksSchema } from './links';

export interface ExampleA113Retrieveaccountbeneficiaries {
  data: Data86;
  meta?: unknown;
  links: Links;
}

export const exampleA113RetrieveaccountbeneficiariesSchema: Schema<ExampleA113Retrieveaccountbeneficiaries> = object(
  {
    data: ['Data', lazy(() => data86Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
