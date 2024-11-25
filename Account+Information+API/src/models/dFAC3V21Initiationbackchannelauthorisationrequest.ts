/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface DFAC3V21Initiationbackchannelauthorisationrequest {
  authReqId: string;
  expiresIn: number;
  interval: number;
}

export const dFAC3V21InitiationbackchannelauthorisationrequestSchema: Schema<DFAC3V21Initiationbackchannelauthorisationrequest> = object(
  {
    authReqId: ['auth_req_id', string()],
    expiresIn: ['expires_in', number()],
    interval: ['interval', number()],
  }
);
