import { createSlice } from 'adapters/redux-toolkit';
import { fetchData } from './statisticAction';

import { calIncome, getFirstName } from 'helper/functions';

const statisticSlice = createSlice({
    name: 'statistic',
    initialState: {
        list: [],
        listPaid: [],
        paid: 0,
        haveNotPaid: 0,
        total: 0,
        income: 0
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase((fetchData.fulfilled), (state, action) => {
            state.list = action.payload.list.sort((a, b) => (getFirstName(a.name) > getFirstName(b.name) ? 1 : -1));
            state.listPaid = action.payload.listPaid.sort((a, b) => (getFirstName(a.name) > getFirstName(b.name) ? 1 : -1));
            state.total = action.payload.total;
            state.paid = action.payload.paid;
            state.haveNotPaid = action.payload.haveNotPaid;

            state.income = calIncome(state.listPaid);

        })
    }
});

export const { } = statisticSlice.actions;
export default statisticSlice.reducer;