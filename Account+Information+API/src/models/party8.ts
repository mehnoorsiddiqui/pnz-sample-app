/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Address8, address8Schema } from './address8';

export interface Party8 {
  partyId: string;
  name: string;
  emailAddress: string;
  address: Address8[];
}

export const party8Schema: Schema<Party8> = object({
  partyId: ['PartyId', string()],
  name: ['Name', string()],
  emailAddress: ['EmailAddress', string()],
  address: ['Address', array(lazy(() => address8Schema))],
});
