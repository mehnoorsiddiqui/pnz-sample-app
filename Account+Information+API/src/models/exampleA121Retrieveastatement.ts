/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data166, data166Schema } from './data166';
import { Links, linksSchema } from './links';

export interface ExampleA121Retrieveastatement {
  data: Data166;
  meta?: unknown;
  links: Links;
}

export const exampleA121RetrieveastatementSchema: Schema<ExampleA121Retrieveastatement> = object(
  {
    data: ['Data', lazy(() => data166Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => linksSchema)],
  }
);
