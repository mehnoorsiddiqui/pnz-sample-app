/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Address, addressSchema } from './address';

export interface Party {
  partyId: string;
  partyNumber: string;
  partyType: string;
  name: string;
  emailAddress: string;
  phone: string;
  mobile: string;
  address: Address[];
}

export const partySchema: Schema<Party> = object({
  partyId: ['PartyId', string()],
  partyNumber: ['PartyNumber', string()],
  partyType: ['PartyType', string()],
  name: ['Name', string()],
  emailAddress: ['EmailAddress', string()],
  phone: ['Phone', string()],
  mobile: ['Mobile', string()],
  address: ['Address', array(lazy(() => addressSchema))],
});
