import React from "react"
import Layout from "../components/Layout"
import Cards from "../commonComponent/cards"

export default function ContactUs() {
  return (
    <Layout>
      <div className="m-5 text-center">
        <Cards header={"Contact us"} />
      </div>
    </Layout>
  )
}
