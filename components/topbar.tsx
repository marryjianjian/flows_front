import styles from '../styles/Home.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts'
import { HostInfo } from '../models/host'

const TopBarChart = (props: { data: HostInfo[] }) => {
  var resdata = props.data;
  resdata.sort(function (a, b) {
    return a.count > b.count ? -1 : 1;
  });
  var height = resdata.length * 44;
  if (height < 100) {
    height = 150;
  }

  return (
    <main className={styles.main}>
      <h4 className={styles.title}>
        Top Web site
      </h4>
      <BarChart
        width={1000}
        height={height}
        data={resdata}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
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
  )
}

export default TopBarChart
