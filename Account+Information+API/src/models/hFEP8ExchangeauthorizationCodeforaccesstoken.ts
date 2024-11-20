/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface HFEP8ExchangeauthorizationCodeforaccesstoken {
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
  accessToken: string;
}

export const hFEP8ExchangeauthorizationCodeforaccesstokenSchema: Schema<HFEP8ExchangeauthorizationCodeforaccesstoken> = object(
  {
    tokenType: ['token_type', string()],
    expiresIn: ['expires_in', number()],
    refreshToken: ['refresh_token', string()],
    accessToken: ['access_token', string()],
  }
);