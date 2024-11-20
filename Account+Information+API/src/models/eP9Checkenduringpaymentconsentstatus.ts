/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data31, data31Schema } from './data31';
import { Links, linksSchema } from './links';
import { Risk2, risk2Schema } from './risk2';

export interface EP9Checkenduringpaymentconsentstatus {
  data: Data31;
  risk: Risk2;
  links: Links;
  meta?: unknown;
}

export const eP9CheckenduringpaymentconsentstatusSchema: Schema<EP9Checkenduringpaymentconsentstatus> = object(
  {
    data: ['Data', lazy(() => data31Schema)],
    risk: ['Risk', lazy(() => risk2Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', unknown()],
  }
);
