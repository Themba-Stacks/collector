// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { TestService, TestServiceData, TestServicePatch, TestServiceQuery } from './test-service.schema'

export type { TestService, TestServiceData, TestServicePatch, TestServiceQuery }

export interface TestServiceParams extends KnexAdapterParams<TestServiceQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TestServiceService<ServiceParams extends Params = TestServiceParams> extends KnexService<
  TestService,
  TestServiceData,
  TestServiceParams,
  TestServicePatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'test-service'
  }
}
