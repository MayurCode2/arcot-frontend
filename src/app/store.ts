// Assuming you have a slice for aiInsights as shown in previous examples
import { configureStore } from '@reduxjs/toolkit';
import aiInsightsReducer from './features/aiInsights/aiInsightsSlice';

// Define the shape of your Redux state
interface RootState {
 aiInsights: {
    data: any; // Replace 'any' with a more specific type based on your data structure
    filter: string;
 };
}

export const store = configureStore({
 reducer: {
    aiInsights: aiInsightsReducer,
 },
});

// Export the RootState type
export type AppState = RootState;
