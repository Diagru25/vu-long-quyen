import './DashboardStatistics.scss';
import React, { useEffect } from 'react';

import { PieChart, Pie, Cell, Legend } from 'adapters/recharts';
import { useSelector, useDispatch } from 'react-redux';

import { fetchData } from 'src/Redux/Statistic';


const DashboardStatistics = (props) => {

    const dispatch = useDispatch();
    const { paid, haveNotPaid } = useSelector(state => state.statisticReducer);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    const data = [
        { name: 'Đã đóng', value: paid },
        { name: 'Chưa đóng', value: haveNotPaid },
    ];

    const COLORS = ['#0088FE', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, index }) => {
        let radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        let x = cx + radius * Math.cos(-midAngle * RADIAN);
        let y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${value}`}
            </text>
        );
    };

    return (
        <div className='statistic-content'>
            <div className="chart">
                <h3>Biểu đồ tháng {new Date().getMonth().toString()}</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend
                        align='center'
                        verticalAlign='bottom'
                        layout='horizontal'
                        iconSize={28}
                    />
                </PieChart>
            </div>
            <div className="list">
                <span>Danh sách võ sinh chưa đóng tiền</span>
            </div>
            <div className="list">
                <span>Danh sách võ sinh đã đóng tiền</span>
            </div>
        </div>
    )
}

export default DashboardStatistics;
