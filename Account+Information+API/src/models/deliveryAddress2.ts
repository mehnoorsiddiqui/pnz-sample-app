/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface DeliveryAddress2 {
  addressType: string;
  addressLine: string[];
  streetName: string;
  buildingNumber: string;
  postCode: string;
  townName: string;
  countrySubDivision: string;
  country: string;
}

export const deliveryAddress2Schema: Schema<DeliveryAddress2> = object({
  addressType: ['AddressType', string()],
  addressLine: ['AddressLine', array(string())],
  streetName: ['StreetName', string()],
  buildingNumber: ['BuildingNumber', string()],
  postCode: ['PostCode', string()],
  townName: ['TownName', string()],
  countrySubDivision: ['CountrySubDivision', string()],
  country: ['Country', string()],
});