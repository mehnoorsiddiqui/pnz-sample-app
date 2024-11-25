/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Initiation2, initiation2Schema } from './initiation2';

export interface Data33 {
  initiation: Initiation2;
  domesticPaymentId: string;
  statusUpdateDateTime: string;
  creationDateTime: string;
  consentId: string;
  status: string;
}

export const data33Schema: Schema<Data33> = object({
  initiation: ['Initiation', lazy(() => initiation2Schema)],
  domesticPaymentId: ['DomesticPaymentId', string()],
  statusUpdateDateTime: ['StatusUpdateDateTime', string()],
  creationDateTime: ['CreationDateTime', string()],
  consentId: ['ConsentId', string()],
  status: ['Status', string()],
});
