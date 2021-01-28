import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';

const fetchStudents = createAsyncThunk(
    'student/getAll',
    async (pageIndex = 1, { dispatch, getState }) => {
        let snapShot = await studentServices.fetchStudents();

        let { pageSize } = getState().studentReducer;
        let data = [];
        let total = snapShot.numChildren();

        snapShot.forEach((child, index) => {
            let key = child.key;
            let val = child.val;

            if (index >= pageSize * (pageIndex - 1)
                && index < pageSize * pageIndex)
                data.push({ ...val, key });
        })

        return { data, total }
    }
)

const saveCurrentStudent = createAsyncThunk(
    'student/saveCurrentStudent',
    async (empty = {}, { dispatch, getState }) => {

        try {
            let { pageIndex, currentStudent } = getState().studentReducer;
            if (currentStudent.key === null) {

                await studentServices.addStudent(currentStudent);
                dispatch(fetchStudents(pageIndex))
            }
            else {
                await studentServices.updateStudent(currentStudent);
                dispatch(fetchStudents(pageIndex))
            }

        } catch (ex) {
            console.log(ex);
        }
    }
)

const deleteStudent = createAsyncThunk(
    'student/delete',
    async (id, { dispatch, getState }) => {
        try {
            let { pageIndex } = getState().studentReducer;
            await studentServices.deleteStudent(id);
            dispatch(fetchStudents(pageIndex));

            return;
        }
        catch (ex) {
            console.log(ex)
        }
    }
)

export {
    fetchStudents,
    saveCurrentStudent,
    deleteStudent
}