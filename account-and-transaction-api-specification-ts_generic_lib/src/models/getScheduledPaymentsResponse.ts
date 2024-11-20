/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data9, data9Schema } from './data9';
import { Links1, links1Schema } from './links1';
import { Meta, metaSchema } from './meta';

export interface GetScheduledPaymentsResponse {
  data: Data9;
  links: Links1;
  meta: Meta;
}

export const getScheduledPaymentsResponseSchema: Schema<GetScheduledPaymentsResponse> = object(
  {
    data: ['Data', lazy(() => data9Schema)],
    links: ['Links', lazy(() => links1Schema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);
