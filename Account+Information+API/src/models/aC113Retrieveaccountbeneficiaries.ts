/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data4, data4Schema } from './data4';
import { Links, linksSchema } from './links';
import { Meta, metaSchema } from './meta';

export interface AC113Retrieveaccountbeneficiaries {
  data: Data4;
  links: Links;
  meta: Meta;
}

export const aC113RetrieveaccountbeneficiariesSchema: Schema<AC113Retrieveaccountbeneficiaries> = object(
  {
    data: ['Data', lazy(() => data4Schema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', lazy(() => metaSchema)],
  }
);
