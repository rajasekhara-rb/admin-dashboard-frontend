import React from "react";
import ReactApexChart from "react-apexcharts";


const SalesChart = (props) => {

    const series = [
        {
            name: "Sales",
            data: props.amounts
        }
    ];
    const options = {
        chart: { id: 'bar-chart' },
        xaxis: {
            categories: props.labels
        },
        zoom: {
            enabled: false
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        toolbar: {
            show: true
        },
    }

    return (
        <div id="chart">
            <ReactApexChart
                options={options} series={series} type="bar" height={350} />
        </div>
    );


}

export default SalesChart;