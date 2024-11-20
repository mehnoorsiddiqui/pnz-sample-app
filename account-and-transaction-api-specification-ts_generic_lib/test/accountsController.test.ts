/**
 * Account and Transaction API SpecificationLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { AccountsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('AccountsController', () => {
  let controller : AccountsController;

  beforeAll(() => {
    controller = new AccountsController(testClient);
  });

  it('should Test GetAccounts', async () => {
    const response = await makeApiCall(
      () => controller.getAccounts(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = {
      'x-fapi-interaction-id': ['', false],
      'Content-Type': ['application/json; charset=utf-8', true],
    };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});