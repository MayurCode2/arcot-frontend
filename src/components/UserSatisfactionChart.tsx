import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../app/store'; // Import the AppState type
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from './UserSatisfactionChart.module.css'; // Import the CSS module

const UsageStatisticsChart: React.FC = () => {
 // Safely access usage_statistics and by_country
 const usageStatisticsData = useSelector((state: AppState) => state.aiInsights.data?.usage_statistics?.by_country) || {};

 // Transform the data into a format suitable for the BarChart component
 const chartData = Object.entries(usageStatisticsData).map(([country, count]) => ({
   country,
   count,
 }));

 return (
    <div className={styles.chartWrapper}>
      <h2 className={styles.chartTitle}>Usage Statistics by Country</h2>
      <div className={styles.chart}>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
 );
};

export default UsageStatisticsChart;
