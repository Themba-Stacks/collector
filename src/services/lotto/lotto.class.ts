// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Lotto, LottoData, LottoPatch, LottoQuery } from './lotto.schema'

export type { Lotto, LottoData, LottoPatch, LottoQuery }

export interface LottoParams extends KnexAdapterParams<LottoQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class LottoService<ServiceParams extends Params = LottoParams> extends KnexService<
  Lotto,
  LottoData,
  LottoParams,
  LottoPatch
> {
  async getLottoResults() {
    return {message: 'this is a test message'}
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'test_table' // update this to the relevant table name once db setup is complete
  }
}
