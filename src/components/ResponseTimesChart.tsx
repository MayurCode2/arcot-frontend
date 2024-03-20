import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from './ResponseTimesChart.module.css'; // Import the CSS module

interface ResponseTimesChartProps {
 data: { name: string; value: number }[];
}

const ResponseTimesChart: React.FC<ResponseTimesChartProps> = ({ data }) => {
 return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Response Times Over Time</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
 );
};

export default ResponseTimesChart;
