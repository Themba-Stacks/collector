// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { LottoService } from './lotto.class'

// Main data model schema
export const lottoSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Lotto', additionalProperties: false },
)
export type Lotto = Static<typeof lottoSchema>
export const lottoValidator = getValidator(lottoSchema, dataValidator)
export const lottoResolver = resolve<Lotto, HookContext<LottoService>>({})

export const lottoExternalResolver = resolve<Lotto, HookContext<LottoService>>({})

// Schema for creating new entries
export const lottoDataSchema = Type.Pick(lottoSchema, ['text'], {
  $id: 'LottoData'
})
export type LottoData = Static<typeof lottoDataSchema>
export const lottoDataValidator = getValidator(lottoDataSchema, dataValidator)
export const lottoDataResolver = resolve<Lotto, HookContext<LottoService>>({})

// Schema for updating existing entries
export const lottoPatchSchema = Type.Partial(lottoSchema, {
  $id: 'LottoPatch'
})
export type LottoPatch = Static<typeof lottoPatchSchema>
export const lottoPatchValidator = getValidator(lottoPatchSchema, dataValidator)
export const lottoPatchResolver = resolve<Lotto, HookContext<LottoService>>({})

// Schema for allowed query properties
export const lottoQueryProperties = Type.Pick(lottoSchema, ['id', 'text'])
export const lottoQuerySchema = Type.Intersect(
  [
    querySyntax(lottoQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type LottoQuery = Static<typeof lottoQuerySchema>
export const lottoQueryValidator = getValidator(lottoQuerySchema, queryValidator)
export const lottoQueryResolver = resolve<LottoQuery, HookContext<LottoService>>({})
