import App from "next/app"
import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { withApolloClient } from "../graphql/withClient"

class RootApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withApolloClient(RootApp)
