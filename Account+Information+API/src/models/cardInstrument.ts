/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface CardInstrument {
  cardSchemeName: string;
  name: string;
  authorisationType: string;
  identification: string;
}

export const cardInstrumentSchema: Schema<CardInstrument> = object({
  cardSchemeName: ['CardSchemeName', string()],
  name: ['Name', string()],
  authorisationType: ['AuthorisationType', string()],
  identification: ['Identification', string()],
});
