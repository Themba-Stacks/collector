// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import knex from 'knex'
import type { Knex } from 'knex'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    postgresqlClient: Knex
  }
}

export const postgresql = (app: Application) => {
  const config = {
    "client": "pg",
    "connection": `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/collector`
  }
  const db = knex(config!)

  app.set('postgresqlClient', db)
}
