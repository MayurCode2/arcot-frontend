import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AIInsightsState {
 data: any; // Define a more specific type based on your data structure
 filter: string;
 toggleCharts: boolean;
}

const initialState: AIInsightsState = {
 data: {},
 filter: '',
 toggleCharts: true,
};

export const aiInsightsSlice = createSlice({
 name: 'aiInsights',
 initialState,
 reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    toggleCharts: (state) => {
      state.toggleCharts = !state.toggleCharts;
    },
 },
});

export const { setData, setFilter, toggleCharts } = aiInsightsSlice.actions;

export default aiInsightsSlice.reducer;
