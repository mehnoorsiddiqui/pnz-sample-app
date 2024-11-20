/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface DFEP3Initiationbackchannelauthorisationrequestforanenduringpaymentconsent {
  authReqId: string;
  expiresIn: number;
  interval: number;
}

export const dFEP3InitiationbackchannelauthorisationrequestforanenduringpaymentconsentSchema: Schema<DFEP3Initiationbackchannelauthorisationrequestforanenduringpaymentconsent> = object(
  {
    authReqId: ['auth_req_id', string()],
    expiresIn: ['expires_in', number()],
    interval: ['interval', number()],
  }
);
