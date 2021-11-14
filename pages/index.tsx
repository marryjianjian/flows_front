import type { NextPage , GetServerSideProps } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  LabelList } from 'recharts';

const { serverRuntimeConfig } = getConfig()

type HostInfo = {
  domain: string
  count: number
  date?: string
}

const Home = (props : {data : HostInfo[]}) => {
  var resdata = props.data;
  resdata.sort(function(a, b) {
    return a.count > b.count ? -1 : 1;
  });
  var height = resdata.length * 44;
  if (height < 100) {
    height = 150;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Flow statistics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Top Web site
        </h4>
        <BarChart
          width={1000}
          height={height}
          data={resdata}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="domain" type="category" width={300} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#0EEAC0">
            <LabelList dataKey="count" position="insideRight" />
          </Bar>
        </BarChart>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  if (!serverRuntimeConfig.backend_url) {
    return {
      notFound: true,
    }
  }
  const res = await fetch(serverRuntimeConfig.backend_url)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  // Pass data to the page via props
  return { props: { data } }
}

export default Home
