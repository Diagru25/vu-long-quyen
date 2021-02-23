import { createSlice } from 'adapters/redux-toolkit';
import { fetchData, updateStudent } from './statisticAction';

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
            state.list = action.payload.list.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));
            state.listPaid = action.payload.listPaid.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));
            state.total = action.payload.total;
            state.paid = action.payload.paid;
            state.haveNotPaid = action.payload.haveNotPaid;

            state.income = calIncome(state.listPaid);

        });
        builder.addCase((updateStudent.fulfilled), (state, action) => {
            let foundIndex = state.list.findIndex(element => element.key === action.payload.student.key);

            state.list.splice(foundIndex, 1);
            state.listPaid.push(action.payload.student);
            state.listPaid.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));

            state.paid += 1;
            state.haveNotPaid -= 1;
            state.income = calIncome(state.listPaid);
        })

    }
});

//export const { } = statisticSlice.actions;
export default statisticSlice.reducer;