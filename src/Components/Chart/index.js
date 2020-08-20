import React from 'react';
import {Bar} from "react-chartjs-2";
import "./style.css";


function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'May'],
        datasets: [{
            label: 'Бренд, Адрес, Период',
            data: [3, 2, 2, 1, 5, 36, 38, 3, 46, 85, 23],
            backgroundColor: 'rgba(40,53,214,1)'
        }
        ]

    }


    const options = {
        title: {
            display: true,
            text: 'Статистика продаж по магазину "CBJ - Иерихон"'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return (
        <div className={"chart"}>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default BarChart;