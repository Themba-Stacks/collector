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
    name: 'test_table'
  }
}

// {"code":200,"message":"OK","data":{"drawDetails":{"drawNumber":"2447","drawDate":"2024\/06\/15","nextDrawDate":"2024\/06\/19","ball1":"48","ball2":"46","ball3":"35","ball4":"1","ball5":"32","ball6":"14","bonusBall":"22","div1Winners":"0","div1Payout":"0","div2Winners":"1","div2Payout":"110026.2","div3Winners":"42","div3Payout":"4556","div4Winners":"108","div4Payout":"2214.7","div5Winners":"2152","div5Payout":"186.8","div6Winners":"3058","div6Payout":"114.2","div7Winners":"41573","div7Payout":"50","div8Winners":"34763","div8Payout":"20","rolloverAmount":"34198201.2","rolloverNumber":"12","totalPrizePool":"38263894.2","totalSales":"16794795","estimatedJackpot":"37000000","guaranteedJackpot":"0","drawMachine":"RNG2","ballSet":"RNG","status":"published","gpwinners":"81697","wcwinners":"0","ncwinners":"0","ecwinners":"0","mpwinners":"0","lpwinners":"0","fswinners":"0","kznwinners":"0","nwwinners":"0","winners":81697,"millionairs":0},"totalWinnerRecord":{"lottoMillionairs":28743608,"lottoWinners":750476649,"ithubaMillionairs":162669,"ithubaWinners":718806805}},"videoData":[{"id":"4613","listid":"1","parentid":"1","videosource":"youtube","videoid":"9-_VnOokDLo","imageurl":"","title":"LOTTO, LOTTO PLUS 1 AND LOTTO PLUS 2 DRAW 2447","description":"","custom_imageurl":"","custom_title":"","custom_description":"","specialparams":"","lastupdate":"0000-00-00 00:00:00","allowupdates":"1","status":"0","isvideo":"1","link":"https:\/\/www.youtube.com\/watch?v=9-_VnOokDLo","ordering":"10003","publisheddate":"2024-06-15 18:57:09","duration":"181","rating_average":"0","rating_max":"0","rating_min":"0","rating_numRaters":"0","statistics_favoriteCount":"0","statistics_viewCount":"2024","keywords":"","startsecond":"0","endsecond":"0","likes":"26","dislikes":"0","commentcount":"0","channel_username":"","channel_title":"","channel_subscribers":"35100","channel_subscribed":"0","channel_location":"","channel_commentcount":"0","channel_viewcount":"0","channel_videocount":"1975","channel_description":"","channel_totaluploadviews":"0","alias":"lotto-lotto-plus-1-and-lotto-plus-2-draw-2447","rawdata":"","datalink":"https:\/\/www.googleapis.com\/youtube\/v3\/videos?id=9-_VnOokDLo&part=id,snippet,contentDetails,statistics&key=AIzaSyCFJzh49qZLvZwLipv-IL8MEhRv7fs3_gg"}]}
