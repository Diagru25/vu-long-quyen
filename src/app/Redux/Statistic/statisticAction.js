import { createAsyncThunk } from 'adapters/redux-toolkit';
import { studentServices } from 'helper/services/services';

const fetchData = createAsyncThunk(
    'statistic/fetchData',
    async () => {
        let snapShot = await studentServices.getAllStudents();
        let list = [];
        let listPaid = [];
        let total = snapShot.numChildren();
        let paid = 0;
        let haveNotPaid = 0;
        let month = new Date().getMonth().toString();

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

export { fetchData }