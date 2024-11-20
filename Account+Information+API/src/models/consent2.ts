/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, Schema, string } from '../schema';
import { CreditorAccount, creditorAccountSchema } from './creditorAccount';
import { CreditorAgent1, creditorAgent1Schema } from './creditorAgent1';
import { InstructedAmount, instructedAmountSchema } from './instructedAmount';
import {
  RemittanceInformation,
  remittanceInformationSchema,
} from './remittanceInformation';

export interface Consent2 {
  instructedAmount: InstructedAmount;
  instructionIdentification: string;
  remittanceInformation: RemittanceInformation;
  creditorAccount: CreditorAccount;
  debtorAccountRelease: boolean;
  endToEndIdentification: string;
  creditorAgent: CreditorAgent1;
}

export const consent2Schema: Schema<Consent2> = object({
  instructedAmount: ['InstructedAmount', lazy(() => instructedAmountSchema)],
  instructionIdentification: ['InstructionIdentification', string()],
  remittanceInformation: [
    'RemittanceInformation',
    lazy(() => remittanceInformationSchema),
  ],
  creditorAccount: ['CreditorAccount', lazy(() => creditorAccountSchema)],
  debtorAccountRelease: ['DebtorAccountRelease', boolean()],
  endToEndIdentification: ['EndToEndIdentification', string()],
  creditorAgent: ['CreditorAgent', lazy(() => creditorAgent1Schema)],
});