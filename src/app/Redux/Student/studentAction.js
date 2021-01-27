import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';
import { useSelector, useDispatch } from 'react-redux';

export const fetchStudents = createAsyncThunk(
    'student/getAll',
    async (pageIndex = 1) => {
        let snapShot = await studentServices.fetchStudents();

        let { pageSize } = useSelector(state => state.studentReducer);
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

export const saveCurrentStudent = createAsyncThunk(
    'student/saveCurrentStudent',
    async () => {
        try {
            let { curStudent, pageIndex } = useSelector(state => state.studentReducer);
            if (curStudent.key === null) {
                curStudent.key = await studentServices.addStudent(curStudent);
                useDispatch(fetchStudents(pageIndex))
            }
            else {
                await studentServices.updateStudent(curStudent);
                useDispatch(fetchStudents(pageIndex))
            }

            return curStudent.key;
        } catch (ex) {
            console.log(ex);
        }
    }
)

export const deleteStudent = createAsyncThunk(
    'student/delete',
    async (id) => {
        try {
            let { pageIndex } = useSelector(state => state.studentReducer);
            await studentServices.deleteStudent(id);
            useDispatch(fetchStudents(pageIndex));

            return;
        }
        catch (ex) {
            console.log(ex)
        }
    }
)