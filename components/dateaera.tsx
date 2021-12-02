import styles from '../styles/Home.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts'
import { LastDaysInfo } from '../models/host'

const DateAeraChart = (props: { data: LastDaysInfo[] }) => {
  var resdata = props.data
  if (!resdata) {
    resdata = [
      { "date_name": "2011-12-01", "domain_count": 1 },
      { "date_name": "2011-12-03", "domain_count": 3 },
      { "date_name": "2011-12-02", "domain_count": 9 },
      { "date_name": "2011-12-04", "domain_count": 10 },
      { "date_name": "2011-12-06", "domain_count": 12 },
      { "date_name": "2011-12-07", "domain_count": 16 },
      { "date_name": "2011-12-05", "domain_count": 18 },
    ]
  }
  resdata.sort(function (a, b) {
    return a.date_name > b.date_name ? 1 : -1;
  })
  return (
    <main className={styles.main}>
      <AreaChart width={800} height={250} data={resdata}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <defs>
          <linearGradient id="colorPv" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUv" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date_name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="basis" dataKey="domain_count" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </main>
  )
}

export default DateAeraChart
