import React from "react"
import { Color } from "../../../ui/enum"

const Title: React.FC = ({ children }) => {
  return (
    <>
      <style jsx>
        {`
          h3 {
            color: ${Color.PrimaryText};
          }
        `}
      </style>
      <h3>{children}</h3>
    </>
  )
}

export default Title
