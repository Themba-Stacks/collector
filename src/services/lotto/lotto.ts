// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  lottoDataValidator,
  lottoPatchValidator,
  lottoQueryValidator,
  lottoResolver,
  lottoExternalResolver,
  lottoDataResolver,
  lottoPatchResolver,
  lottoQueryResolver
} from './lotto.schema'

import type { Application } from '../../declarations'
import { LottoService, getOptions } from './lotto.class'
import { lottoPath, lottoMethods } from './lotto.shared'
import { logRuntime } from '../../hooks/log-runtime'

export * from './lotto.class'
export * from './lotto.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const lotto = (app: Application) => {
  // Register our service on the Feathers application
  app.use(lottoPath, new LottoService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['getLottoResults'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(lottoPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(lottoExternalResolver), schemaHooks.resolveResult(lottoResolver), logRuntime]
    },
    before: {
      all: [schemaHooks.validateQuery(lottoQueryValidator), schemaHooks.resolveQuery(lottoQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(lottoDataValidator), schemaHooks.resolveData(lottoDataResolver)],
      patch: [schemaHooks.validateData(lottoPatchValidator), schemaHooks.resolveData(lottoPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [lottoPath]: LottoService
  }
}
