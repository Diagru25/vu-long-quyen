import { message } from 'adapters/ant-design';

import { createSlice } from 'adapters/redux-toolkit';

import {
    fetchAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
} from './studentAction';

import { getFromTo, getFirstName } from 'helper/functions';

const studentDefault = {
    key: null,
    name: '',
    address: '',
    dayOfBirth: '',
    phoneNumber: '',
    beltID: '',
    startDate: '',
    endDate: '',
    createDate: '',
    isMember: true,
    months: [],
    promotionDate: [], //{type: beltID, onDate: ''}
    contactNote: [], //{parentName: '', parentPhone: ''}
};

const StudentSlice = createSlice({
    name: 'student',
    initialState: {
        list: [],
        currentList: [],
        currentStudent: studentDefault,

        total: 0,
        pageSize: 10,
        pageIndex: 1,

        orderBy: 'nameDes',
        loading: false
    },

    reducers: {
        setDefaultStudent: (state) => {
            state.currentStudent = studentDefault
        },
        setCurrentStudent: (state, action) => {
            state.currentStudent = action.payload;
        },
        updateCurrentStudent: (state, action) => {
            state.currentStudent = { ...state.currentStudent, ...action.payload };
        },
        getStudentForPage: (state, action) => {
            state.currentList = [];

            state.pageIndex = action.payload.pageIndex;
            state.pageSize = action.payload.pageSize;

            let from = state.pageSize * (state.pageIndex - 1);
            let to = state.pageSize * state.pageIndex;
            state.list.forEach((student, index) => {
                if (index >= from && index < to)
                    state.currentList.push(student);
            })
        },
        sortList: (state, action) => {
            state.orderBy = action.payload;

            switch (state.orderBy) {
                case 'nameDes':
                    state.list.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));
                    state.currentList = getFromTo(state.list, state.pageIndex, state.pageSize);
                    break;
                case 'nameInc':
                    state.list.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name)) < 0 ? 1 : -1));
                    state.currentList = getFromTo(state.list, state.pageIndex, state.pageSize);
                    break;
                default: alert('Chưa xong - mai làm !');
            }

        },
        updateState: (state, action) => {
            console.log('I do not understand why state does not update ?');
            // console.log(action.payload);
            // let temp = { ...state, ...action.payload };
            // console.log(temp);
            // state = temp;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
            state.total = action.payload.total;
            state.list = action.payload.data.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));

            state.currentList = getFromTo(state.list, state.pageIndex, state.pageSize);

            state.loading = false;

            console.log('fetch success');
        });
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.list.push({ ...state.currentStudent, key: action.payload.key });
            state.total += 1;
            state.list.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));

            state.currentList = getFromTo(state.list, state.pageIndex, state.pageSize);

            let name = state.currentStudent.name;
            state.currentStudent = studentDefault;

            message.success(`Thêm mới võ sinh "${name}" thành công !`, 3);
        });
        builder.addCase(updateStudent.fulfilled, (state, action) => {
            let foundIndex = state.list.findIndex(
                (student) => student.key === state.currentStudent.key
            );
            state.list[foundIndex] = state.currentStudent;

            state.list.sort((a, b) => (getFirstName(a.name).localeCompare(getFirstName(b.name))));
            state.currentList = getFromTo(state.list, state.pageIndex, state.pageSize);

            let name = state.currentStudent.name;
            state.currentStudent = studentDefault;

            message.success(`cập nhật võ sinh "${name}" thành công !`, 3);
        });
        builder.addCase(deleteStudent.fulfilled, (state, action) => {

            let foundIndex = state.list.findIndex(element => element.key === action.payload.key);
            state.list.splice(foundIndex, 1);
            state.total -= 1;

            state.currentList = [];
            let from = state.pageSize * (state.pageIndex - 1);
            let to = state.pageSize * state.pageIndex;
            state.list.forEach((student, index) => {
                if (index >= from && index < to)
                    state.currentList.push(student);
            })

            let name = state.currentStudent.name;
            state.currentStudent = studentDefault;

            message.success(`Xóa võ sinh "${name}" thành công !`, 3);
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
    sortList,
} = StudentSlice.actions;

export default StudentSlice.reducer;
