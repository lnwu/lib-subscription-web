import React from "react"
import Head from "../../shared/components/Head"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const Query = gql`
  {
    repos(keyword: "react") {
      id
    }
  }
`

const SRP: React.FC = () => {
  const { data, loading } = useQuery(Query)
  console.log("loading", loading)
  console.log("data", data)
  return (
    <>
      <Head title="SRP" />
      <main>SRP</main>
    </>
  )
}

export default SRP
