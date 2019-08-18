import React from "react"
import NextHead from "next/head"

interface IProps {
  title?: string
}

const Head: React.FC<IProps> = ({ title = "Lib Subscription" }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
)

export default React.memo(Head)
