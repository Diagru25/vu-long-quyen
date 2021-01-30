import { Pagination } from 'adapters/ant-design';
import { useDispatch, useSelector } from 'react-redux';
import { updateState, getStudentForPage } from 'src/Redux/Student';

const Paginate = () => {

    const dispatch = useDispatch();
    const { total, pageIndex, pageSize } = useSelector(state => state.studentReducer);

    console.log(total);

    const handleOnChange = (page) => {
        dispatch(updateState({ pageIndex: page }));
        getStudentForPage();
    }
    const handleSizeChange = (current, pageSize) => {
        dispatch(updateState({ pageSize: pageSize }));
        getStudentForPage();
    }

    return (
        <Pagination
            total={total}
            pageSize={pageSize}
            current={pageIndex}
            showSizeChanger={true}

            onChange={handleOnChange}
            onShowSizeChange={handleSizeChange}
        />
    )
}

export default Paginate;


