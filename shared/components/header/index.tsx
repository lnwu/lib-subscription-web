import React from "react"
import Title from "./components/Title"
import { Color, Width } from "../../ui/enum"
import Login from "./components/Login"

const Header: React.FC = () => {
  return (
    <>
      <style jsx>
        {`
          header {
            background-color: ${Color.PrimaryDark};
          }
          .header-container {
            width: ${Width.Container};
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
      <header>
        <div className="header-container">
          <Title>Lib Subscription</Title>
          <Login />
        </div>
      </header>
    </>
  )
}

export default React.memo(Header)
