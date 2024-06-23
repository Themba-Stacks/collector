// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Lotto, LottoData, LottoPatch, LottoQuery, LottoService } from './lotto.class'

export type { Lotto, LottoData, LottoPatch, LottoQuery }

export type LottoClientService = Pick<LottoService<Params<LottoQuery>>, (typeof lottoMethods)[number]>

export const lottoPath = 'lotto'

export const lottoMethods: Array<keyof LottoService> = ['find', 'get', 'create', 'patch', 'remove']

export const lottoClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(lottoPath, connection.service(lottoPath), {
    methods: lottoMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [lottoPath]: LottoClientService
  }
}
