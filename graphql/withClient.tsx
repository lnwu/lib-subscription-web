import React, { Component } from "react"
import { initApollo } from "./client"
import Head from "next/head"
import { getDataFromTree } from "@apollo/react-ssr"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"
import { KeyInObject } from "../helper/typeHelper"

export const withApolloClient = (App: any) => {
  return class Apollo extends Component {
    private apolloClient: ApolloClient<NormalizedCacheObject>

    constructor(props: { apolloState: NormalizedCacheObject }) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    static displayName = "withApollo(App)"
    static async getInitialProps(ctx: KeyInObject) {
      const { AppTree } = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const apollo = initApollo()
      if (typeof window === "undefined") {
        try {
          await getDataFromTree(<AppTree {...appProps} apolloClient={apollo} />)
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error)
        }

        Head.rewind()
      }

      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState
      }
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
