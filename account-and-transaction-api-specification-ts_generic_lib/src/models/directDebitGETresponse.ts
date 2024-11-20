/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data13, data13Schema } from './data13';
import { Links1, links1Schema } from './links1';
import { Meta, metaSchema } from './meta';

export interface DirectDebitGETresponse {
  data: Data13;
  links: Links1;
  meta: Meta;
}

export const directDebitGETresponseSchema: Schema<DirectDebitGETresponse> = object(
  {
    data: ['Data', lazy(() => data13Schema)],
    links: ['Links', lazy(() => links1Schema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);