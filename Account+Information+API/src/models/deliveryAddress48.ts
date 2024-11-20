/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface DeliveryAddress48 {
  townName: string;
  postCode: string;
  buildingNumber: string;
  countrySubDivision: string[];
  addressLine: string[];
  country: string;
  streetName: string;
}

export const deliveryAddress48Schema: Schema<DeliveryAddress48> = object({
  townName: ['TownName', string()],
  postCode: ['PostCode', string()],
  buildingNumber: ['BuildingNumber', string()],
  countrySubDivision: ['CountrySubDivision', array(string())],
  addressLine: ['AddressLine', array(string())],
  country: ['Country', string()],
  streetName: ['StreetName', string()],
});