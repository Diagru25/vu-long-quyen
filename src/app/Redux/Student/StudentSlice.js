import { createSlice } from 'adapters/redux-toolkit';

const studentDefault = {
    key: null,
    name: '',
    address: '',
    dayOfBirth: '',
    phoneNumber: '',
    startDate: '',
    endDate: '',
    isMember: true,
    months: [],
    promotionDate: [], //{type: beltID, onDate: ''}
    contactNote: [], //{parentName: '', parentPhone: ''}
}

const StudentSlice = createSlice({
    name: 'student',
    initialState: {
        list: [],
        currentStudent: studentDefault,

        total: 0,
        pageSize: 10,
        pageIndex: 1
    },
    reducers: {
        setDefaultStudent: state => state.currentStudent = studentDefault,
        setCurrentStudent: (state, action) => {
            state.currentStudent = action.payload
        }
    }
})