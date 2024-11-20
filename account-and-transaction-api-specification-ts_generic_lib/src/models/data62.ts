/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { BeneficiaryModel, beneficiaryModelSchema } from './beneficiaryModel';

export interface Data62 {
  /** Beneficiary */
  beneficiary?: BeneficiaryModel[];
}

export const data62Schema: Schema<Data62> = object({
  beneficiary: [
    'Beneficiary',
    optional(array(lazy(() => beneficiaryModelSchema))),
  ],
});
