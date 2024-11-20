/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data8, data8Schema } from './data8';
import { Links, linksSchema } from './links';
import { Meta, metaSchema } from './meta';

export interface AC107Retrievebulkscheduledpayments {
  data: Data8;
  links: Links;
  meta: Meta;
}

export const aC107RetrievebulkscheduledpaymentsSchema: Schema<AC107Retrievebulkscheduledpayments> = object(
  {
    data: ['Data', lazy(() => data8Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);