import styles from '../styles/Home.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts'

type Temp = {
  name: string
  uv?: number
  pv?: number
  amt?: number
  time: number
}

const DateAeraChart = () => {
  var resdata
  resdata = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, time: 9 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
    { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
    { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
    { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
    { name: 'Page H', time: 24 },
  ]
  return (
    <main className={styles.main}>
      <AreaChart width={730} height={250} data={resdata}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="basis" dataKey="amt" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </main>
  )
}

export default DateAeraChart