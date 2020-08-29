import React from "react";
import {Bar} from "react-chartjs-2";
import "./style.css";
function BarChart({name,id}) {

    const data = {
        labels:name,
        datasets: [{
            label:'Бренд, Адрес, Период',
            data:id,
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
    return (<>
        <div className={"chart"}>
            <Bar data={data} options={options}/>
        </div>
        </>
    );
}
export default BarChart;