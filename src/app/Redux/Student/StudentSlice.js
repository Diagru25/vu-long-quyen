import { createSlice } from 'adapters/redux-toolkit';
import {
  fetchStudents,
  saveCurrentStudent,
  deleteStudent,
} from './studentAction';

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
};

const StudentSlice = createSlice({
  name: 'student',
  initialState: {
    list: [],
    currentStudent: studentDefault,

    total: 0,
    pageSize: 10,
    pageIndex: 1,
  },
  reducers: {
    setDefaultStudent: (state) => (state.currentStudent = studentDefault),
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
    updateCurrentStudent: (state, action) => {
      state.currentStudent = { ...state.currentStudent, ...action.payload };
    },
    updateState: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.list = [...action.payload.data];
        state.total = action.total;
        console.log('fetch success');
      })
      .addCase(saveCurrentStudent.fulfilled, (state, action) => {
        console.log('save success');
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        console.log('save success');
      })
      .addDefaultCase((state, action) => {});
  },
});

export const { setDefaultStudent, setCurrentStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
