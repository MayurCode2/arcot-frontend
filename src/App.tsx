import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './app/features/aiInsights/aiInsightsSlice';
import Dashboard from './components/Dashboard';
import aiData from './ai-data.json'; // Adjust the path as necessary
import styles from './App.module.css'; // Import the CSS module

const App: React.FC = () => {
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(setData(aiData));
 }, [dispatch]);

 return (
    <div className={styles.appContainer}>
     <h1>Dashboard</h1>
      <Dashboard />
    </div>
 );
};

export default App;
