import './DashboardStatistics.scss';

import { PieChart, Pie, Cell, Legend } from 'adapters/recharts';
import { List, Checkbox } from 'adapters/ant-design';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moment } from 'adapters/moment';

import { fetchData } from 'src/Redux/Statistic';


const DashboardStatistics = (props) => {

    const dispatch = useDispatch();
    const { paid, haveNotPaid, list, listPaid } = useSelector(state => state.statisticReducer);

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
                <h3>Biểu đồ tháng {moment().format("MM")}</h3>
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
                <h3>Danh sách chưa đóng tiền tháng {moment().format('MM')} ({haveNotPaid})</h3>
                <List
                    itemLayout='horizontal'
                    dataSource={list}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<i className='fas fa-times' style={{ color: '#ff3333' }}></i>}
                                title={item.name}
                                description={item.dayOfBirth}
                            />
                            <Checkbox />
                        </List.Item>
                    )}
                />

            </div>
            <div className="list">
                <h3>Danh sách đã đóng tiền tháng {moment().format('MM')} ({paid})</h3>
                <List
                    itemLayout='horizontal'
                    dataSource={listPaid}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<i className='fas fa-check' style={{ color: '#4BB543' }}></i>}
                                title={item.name}
                                description={item.dayOfBirth}
                            />

                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default DashboardStatistics;
