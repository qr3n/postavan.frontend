import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SimplePieChart = () => {
    // Данные для графика
    const data = [
        { name: 'Группа A', value: 400 },
        { name: 'Группа B', value: 300 },
        { name: 'Группа C', value: 300 },
        { name: 'Группа D', value: 200 },
    ];

    // Цвета для сегментов
    const COLORS = ['#462bff', '#ff9b37', '#3686ff', '#cf37d3'];

    return (
        <div className="w-full h-64 flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        innerRadius={0}
                        dataKey="value"
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                stroke="#1e3a8a" // Убираем белые разделяющие полосы
                                strokeWidth={8}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}`, 'Значение']} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SimplePieChart;