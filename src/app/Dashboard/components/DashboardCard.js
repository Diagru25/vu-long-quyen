import './DashboardCard.scss';
import { Card } from 'adapters/ant-design';

import { useSelector } from 'react-redux';

import { numberWithCommas } from 'helper/functions';
import { moment } from 'adapters/moment';

export default function DashboardCard() {

    const { total, income } = useSelector(state => state.statisticReducer);

    return (
        <div className='card-content'>
            <Card title='Tổng số võ sinh' bordered={true} className='card-item'>
                <Card.Meta
                    title={total + ' võ sinh'}
                    description={'Tính đến: ' + moment().format('DD-MM-YYYY')}
                />
            </Card>
            <Card title={`Tổng thu ${moment().year()}`} bordered={true} className='card-item'>
                <Card.Meta
                    title={numberWithCommas(income) + 'vnđ'}
                    description={'Tính đến: ' + moment().format('DD-MM-YYYY')}
                />
            </Card>
        </div>
    )
}
