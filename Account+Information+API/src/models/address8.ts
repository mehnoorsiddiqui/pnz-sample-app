/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Address8 {
  postCode: string;
  buildingNumber?: string;
  countrySubDivision?: string;
  addressLine: string;
  country: string;
  streetName?: string;
  addressType: string;
  townName: string;
}

export const address8Schema: Schema<Address8> = object({
  postCode: ['PostCode', string()],
  buildingNumber: ['BuildingNumber', optional(string())],
  countrySubDivision: ['CountrySubDivision', optional(string())],
  addressLine: ['AddressLine', string()],
  country: ['Country', string()],
  streetName: ['StreetName', optional(string())],
  addressType: ['AddressType', string()],
  townName: ['TownName', string()],
});