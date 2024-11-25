/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data74, data74Schema } from './data74';
import { Links70, links70Schema } from './links70';

export interface A101Retrieveconsentedaccountsinformation {
  data: Data74;
  meta?: unknown;
  links: Links70;
}

export const a101RetrieveconsentedaccountsinformationSchema: Schema<A101Retrieveconsentedaccountsinformation> = object(
  {
    data: ['Data', lazy(() => data74Schema)],
    meta: ['Meta', unknown()],
    links: ['Links', lazy(() => links70Schema)],
  }
);
