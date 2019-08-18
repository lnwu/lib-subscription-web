import React from "react"
import { Color } from "../../../ui/enum"

const Login: React.FC = () => {
  return (
    <>
      <style jsx>
        {`
          span {
            color: ${Color.PrimaryText};
          }
        `}
      </style>
      <span>登录</span>
    </>
  )
}

export default Login
