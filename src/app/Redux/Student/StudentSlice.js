import { createSlice } from 'adapters/redux-toolkit';

import {
  fetchAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from './studentAction';

const studentDefault = {
  key: null,
  name: '',
  address: '',
  dayOfBirth: '',
  phoneNumber: '',
  image: '',
  beltID: '',
  startDate: '',
  endDate: '',
  createDate: '',
  isMember: true,
  months: [],
  promotionDate: [], //{type: beltID, onDate: ''}
  contactNote: [], //{parentName: '', parentPhone: ''}
};

// const fncSortListStudent = (arrInput, type) => {
//   return arrInput;
// };

const StudentSlice = createSlice({
  name: 'student',
  initialState: {
    list: [],
    currentList: [],
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
    getStudentForPage: (state) => {
      state.currentList = [];
      //state.currentList = fncGetFromTo([...state.list], state.pageSize, state.pageIndex);
      // state.list.forEach((child, index) => {
      //     if (index >= 0 && index < 10) {
      //         console.log('push: ', child.key);
      //         state.currentList.push(child);
      //     }

      // })
      console.log('hfsdhfsudf');
      // state.list.forEach((student,index) => {
      //     if(index >= from && index < to)
      //         state.currentList.push(student)
      // })
    },
    updateState: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      state.total = action.payload.total;
      state.list = action.payload.data;

      console.log('fetch success');
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      //let listTemp = state.list;
      state.list.push({ ...state.currentStudent, ...action.payload.key });
      //state.list = fncSortListStudent(state.list);
      //state.currentList = fncGetFromTo(state.list, state.pageSize, state.pageIndex);
      state.currentStudent = studentDefault;

      console.log('Add success');
    });
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      let foundIndex = state.list.findIndex(
        (student) => student.key === state.currentStudent.key
      );
      state.list[foundIndex] = state.currentStudent;
      state.currentStudent = studentDefault;

      console.log('Update success');
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      console.log('Delete success');
    });
    builder.addDefaultCase((state, action) => state);
  },
});

export const {
  setDefaultStudent,
  setCurrentStudent,
  updateCurrentStudent,
  getStudentForPage,
  updateState,
} = StudentSlice.actions;

export default StudentSlice.reducer;
