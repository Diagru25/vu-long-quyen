import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';

const fetchAllStudents = createAsyncThunk(
    'student/getAll',
    async () => {

        let snapShot = await studentServices.getAllStudents();
        let data = [];
        let total = snapShot.numChildren();

        snapShot.forEach((child) => {
            let key = child.key;
            let val = child.val();
            data.push({ ...val, key });
        })

        console.log('total: ', total);
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
            console.log(ex);
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