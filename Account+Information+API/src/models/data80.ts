/**
 * Account information PNZ-API-CentreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  ScheduledPayment4,
  scheduledPayment4Schema,
} from './scheduledPayment4';

export interface Data80 {
  scheduledPayment: ScheduledPayment4[];
}

export const data80Schema: Schema<Data80> = object({
  scheduledPayment: [
    'ScheduledPayment',
    array(lazy(() => scheduledPayment4Schema)),
  ],
});
