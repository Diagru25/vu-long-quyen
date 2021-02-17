import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';

import { moment } from 'adapters/moment';

const fetchData = createAsyncThunk(
    'statistic/fetchData',
    async () => {

        let snapShot = await studentServices.getAllStudents();
        let list = [];
        let listPaid = [];
        let total = snapShot.numChildren();
        let paid = 0;
        let haveNotPaid = 0;
        let month = moment().format('M');

        snapShot.forEach((child) => {
            let key = child.key;
            let val = child.val();

            if (typeof (val.months) === 'undefined') {
                list.push({ ...val, key });
            }
            else {
                if (val.months.indexOf(month) > -1) {
                    listPaid.push({ ...val, key });
                }
                else {
                    list.push({ ...val, key });
                }
            }
        })

        paid = listPaid.length;
        haveNotPaid = list.length;

        return { list, listPaid, total, paid, haveNotPaid }
    }
)

const updateStudent = createAsyncThunk(
    'statistic/updateStudent',
    async (student) => {
        try {
            await studentServices.updateStudent(student);
            return { student };
        }
        catch (ex) {
            console.log('thunk statistic: ', ex);
        }
    }
)

export { fetchData, updateStudent }