/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { CreditorAccount2, creditorAccount2Schema } from './creditorAccount2';
import { CreditorAgent22, creditorAgent22Schema } from './creditorAgent22';
import {
  FinalPaymentAmount2,
  finalPaymentAmount2Schema,
} from './finalPaymentAmount2';
import {
  FirstPaymentAmount2,
  firstPaymentAmount2Schema,
} from './firstPaymentAmount2';
import {
  NextPaymentAmount2,
  nextPaymentAmount2Schema,
} from './nextPaymentAmount2';
import { Reference, referenceSchema } from './reference';
import {
  StandingOrderStatusCodeEnum,
  standingOrderStatusCodeEnumSchema,
} from './standingOrderStatusCodeEnum';

export interface StandingOrderModel {
  /** A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. */
  accountId: string;
  /** A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner. */
  standingOrderId?: string;
  /**
   * EvryDay - Every day
   * EvryWorkgDay - Every working day
   * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
   * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
   * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
   * Patterns:
   * EvryDay (ScheduleCode)
   * EvryWorkgDay (ScheduleCode)
   * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
   * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
   * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
   * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
   * EvryDay
   * EvryWorkgDay
   * IntrvlWkDay:0[1-9]:0[1-7]
   * WkInMnthDay:0[1-5]:0[1-7]
   * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
   */
  frequency: string;
  reference?: Reference;
  /**
   * The date on which the first payment for a Standing Order schedule will be made.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  firstPaymentDateTime?: string;
  firstPaymentAmount?: FirstPaymentAmount2;
  /**
   * The date on which the next payment for a Standing Order schedule will be made.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  nextPaymentDateTime: string;
  nextPaymentAmount: NextPaymentAmount2;
  /**
   * The date on which the final payment for a Standing Order schedule will be made.
   * All dates in the JSON payloads are represented in ISO 8601 date-time format.
   * All date-time fields in responses must include the timezone. An example is below:
   * 2017-04-05T10:43:07+00:00
   */
  finalPaymentDateTime?: string;
  finalPaymentAmount?: FinalPaymentAmount2;
  /** Specifies the status of the standing order in code form. */
  standingOrderStatusCode?: StandingOrderStatusCodeEnum;
  creditorAgent?: CreditorAgent22;
  creditorAccount?: CreditorAccount2;
}

export const standingOrderModelSchema: Schema<StandingOrderModel> = object({
  accountId: ['AccountId', string()],
  standingOrderId: ['StandingOrderId', optional(string())],
  frequency: ['Frequency', string()],
  reference: ['Reference', optional(lazy(() => referenceSchema))],
  firstPaymentDateTime: ['FirstPaymentDateTime', optional(string())],
  firstPaymentAmount: [
    'FirstPaymentAmount',
    optional(lazy(() => firstPaymentAmount2Schema)),
  ],
  nextPaymentDateTime: ['NextPaymentDateTime', string()],
  nextPaymentAmount: [
    'NextPaymentAmount',
    lazy(() => nextPaymentAmount2Schema),
  ],
  finalPaymentDateTime: ['FinalPaymentDateTime', optional(string())],
  finalPaymentAmount: [
    'FinalPaymentAmount',
    optional(lazy(() => finalPaymentAmount2Schema)),
  ],
  standingOrderStatusCode: [
    'StandingOrderStatusCode',
    optional(standingOrderStatusCodeEnumSchema),
  ],
  creditorAgent: ['CreditorAgent', optional(lazy(() => creditorAgent22Schema))],
  creditorAccount: [
    'CreditorAccount',
    optional(lazy(() => creditorAccount2Schema)),
  ],
});