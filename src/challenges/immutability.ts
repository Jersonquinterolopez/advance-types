interface Config {
  readonly host: string
  readonly port: string
  readonly db: string
}

let config: Config = {
  host: 'test',
  port: 'test',
  db: 'test',
}

config.db = 'saasa'
