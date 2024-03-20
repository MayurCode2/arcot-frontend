import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../app/features/aiInsights/aiInsightsSlice'; // Import the action to set the filter
import CategoryDistributionChart from './CategoryDistributionChart';
import ResponseTimesChart from './ResponseTimesChart';
import { AppState } from '../app/store'; // Import the AppState type
import styles from './Dashboard.module.css'; // Import the CSS module

// Define specific types for your data
interface CategoryDistributionData {
 name: string;
 value: number;
}

const Dashboard: React.FC = () => {
 const dispatch = useDispatch();
 const aiData = useSelector((state: AppState) => state.aiInsights.data);
 const filter = useSelector((state: AppState) => state.aiInsights.filter);

 // Function to handle filter change
 const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   dispatch(setFilter(event.target.value));
 };

 // Check if aiData is defined before using Object.entries()
 const categoryDistributionData: CategoryDistributionData[] = aiData && aiData.category_distribution ? Object.entries(aiData.category_distribution).filter(([name]) => !filter || name === filter).map(([name, value]) => ({ name, value: Number(value) })) : [];

 // Check if aiData is defined before using Object.entries()
 const responseTimesData: CategoryDistributionData[] = aiData && aiData.response_times && aiData.response_times.day_wise ? aiData.response_times.day_wise.map((item: { date: string; average_time: number }) => ({ name: item.date, value: item.average_time })) : [];

 return (
    <div className={styles.dashboardContainer}>

<div className={styles.filterContainer}>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {Object.keys(aiData.category_distribution || {}).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <h2 className={styles.chartTitle}>Category Distribution</h2>
      <div className={styles.chartContainer}>
        <CategoryDistributionChart data={categoryDistributionData} />
      </div>
      <h2 className={styles.chartTitle}>Response Times Over Time</h2>
      <div className={styles.chartContainer}>
        <ResponseTimesChart data={responseTimesData} />
      </div>
      
    </div>
 );
};

export default Dashboard;
