/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, unknown } from '../schema';
import { Data, dataSchema } from './data';
import { Links, linksSchema } from './links';
import { Risk, riskSchema } from './risk';

export interface AC2Createaccountaccessconsent {
  data: Data;
  risk: Risk;
  links: Links;
  meta?: unknown;
}

export const aC2CreateaccountaccessconsentSchema: Schema<AC2Createaccountaccessconsent> = object(
  {
    data: ['Data', lazy(() => dataSchema)],
    risk: ['Risk', lazy(() => riskSchema)],
    links: ['Links', lazy(() => linksSchema)],
    meta: ['Meta', unknown()],
  }
);
