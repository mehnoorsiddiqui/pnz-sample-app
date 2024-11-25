/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Beneficiary5, beneficiary5Schema } from './beneficiary5';

export interface Data86 {
  beneficiary: Beneficiary5[];
}

export const data86Schema: Schema<Data86> = object({
  beneficiary: ['Beneficiary', array(lazy(() => beneficiary5Schema))],
});
