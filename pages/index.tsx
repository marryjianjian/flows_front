import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopBarChart from '../components/topbar'
import { HostInfo, LastDaysInfo } from '../models/host'
import DateAeraChart from '../components/dateaera'
import { useEffect, useState } from 'react'

const { serverRuntimeConfig } = getConfig()

const pad_md = (s : string, n : number) : string => {
  if (s.length < n) {
    s = '0'.repeat(n - s.length) + s;
  }
  return s
}

const last7datestr = () : string[] => {
  let days_unixstamps = new Array(7);
  for (let i = 0; i < days_unixstamps.length; i++) {
    if (i === 0) {
      days_unixstamps[i] = Date.now();
    } else {
      days_unixstamps[i] = days_unixstamps[i-1] - 86400 * 1000;
    }
  }
  return days_unixstamps.map((v) => {
    var date = new Date(v);
    var year = date.getFullYear().toString();
    var month = pad_md((date.getMonth() + 1).toString(), 2);
    var day = pad_md(date.getDate().toString(), 2);
    return [year, month, day].join('-');
  });
}

const Home = (props: { last7dayscount: LastDaysInfo[], top10domainscount : HostInfo[] }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Flow statistics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBarChart data={props.top10domainscount} />
      <DateAeraChart data={props.last7dayscount} />

      <footer className={styles.footer}>
        <a
          href="https://github.com/marryjianjian/flows_front"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}flows_statistics
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  if (!serverRuntimeConfig.backend_host) {
    return {
      notFound: true,
    }
  }
  const host = serverRuntimeConfig.backend_host
  const last7dayscount = await (await fetch(host + "/daystatistics", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(last7datestr())
  })).json()
  const top10domainscount = await (await fetch(host + "/top10domains")).json()

  if (!last7dayscount || !top10domainscount) {
    return {
      notFound: true,
    }
  }
  // Pass host to the page via props
  return { props: { last7dayscount, top10domainscount } }
}

export default Home
