// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Lotto, LottoData, LottoPatch, LottoQuery } from './lotto.schema'
import axios from 'axios';


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
    const data = 'gameName=LOTTO&drawNumber=2446&isAjax=true';

    const config = {
      method: 'post',
      url: 'https://www.nationallottery.co.za/index.php?task=results.redirectPageURL&amp;Itemid=265&amp;option=com_weaver&amp;controller=lotto-history',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
        'origin': 'https://www.nationallottery.co.za'
      },
      data : data
    };

    const response = await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    return response;
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'test_table' // update this to the relevant table name once db setup is complete
  }
}
