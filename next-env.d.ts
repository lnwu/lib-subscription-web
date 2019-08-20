/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface ProcessEnv {
    GRAPHQL_ENDPOINT: string
  }
}
