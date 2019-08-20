import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject
} from "apollo-boost"
import fetch from "isomorphic-unfetch"
import { Nullable } from "../helper/typeHelper"

let apolloClient: Nullable<ApolloClient<NormalizedCacheObject>> = null

const createClient = (initialState: NormalizedCacheObject) => {
  const isBrowser = typeof window !== "undefined"
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      credentials: "same-origin",
      fetch: !isBrowser ? fetch : undefined
    }),
    cache: new InMemoryCache().restore(initialState)
  })
}

export const initApollo = (initialState: NormalizedCacheObject = {}) => {
  if (typeof window === "undefined") {
    return createClient(initialState)
  }

  if (!apolloClient) {
    apolloClient = createClient(initialState)
  }

  return apolloClient
}
