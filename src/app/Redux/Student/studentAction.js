import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';

const fetchAllStudents = createAsyncThunk(
    'student/getAll',
    async (txtSearch = '') => {

        let snapShot = await studentServices.getAllStudents();
        let data = [];
        let total = 0;

        snapShot.forEach((child) => {
            let key = child.key;
            let val = child.val();
            if (txtSearch !== '') {
                if (val.name.toUpperCase().includes(txtSearch.toUpperCase()))
                    data.push({ ...val, key })
            }
            else
                data.push({ ...val, key });
        })


        total = data.length;

        return { data, total }
    }
)


const addStudent = createAsyncThunk(
    'student/addStudent',
    async (student = {}, { getState }) => {
        try {
            let { currentStudent } = getState().studentReducer;
            let key = await (await studentServices.addStudent(currentStudent)).key;
            return { key }
        }
        catch (ex) {
            console.log(ex);
        }
    }
)

const updateStudent = createAsyncThunk(
    'student/updateStudent',
    async (student = {}, { getState }) => {
        try {
            let { currentStudent } = getState().studentReducer;
            await studentServices.updateStudent(currentStudent);
        }
        catch (ex) {
            console.log('thunk: ', ex);
        }
    }
)

const deleteStudent = createAsyncThunk(
    'student/delete',
    async (id, { dispatch, getState }) => {
        try {
            await studentServices.deleteStudent(id);

            return { key: id };
        }
        catch (ex) {
            console.log(ex)
        }
    }
)

export {
    fetchAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
}