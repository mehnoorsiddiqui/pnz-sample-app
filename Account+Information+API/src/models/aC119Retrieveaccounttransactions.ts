/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data11, data11Schema } from './data11';
import { Links, linksSchema } from './links';
import { Meta, metaSchema } from './meta';

export interface AC119Retrieveaccounttransactions {
  data: Data11;
  links: Links;
  meta: Meta;
}

export const aC119RetrieveaccounttransactionsSchema: Schema<AC119Retrieveaccounttransactions> = object(
  {
    data: ['Data', lazy(() => data11Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);
