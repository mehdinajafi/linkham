import Head from "next/head"
import Layout from "../src/components/Layout"
import Header from "../src/components/home-page/Header"
import SocialMedia from "../src/components/home-page/SocialMedia"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>لینک‌هام</title>
      </Head>
      <Header />
      <SocialMedia />
    </Layout>
  )
}
