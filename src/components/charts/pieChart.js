import React from "react";
import ReactApexChart from "react-apexcharts";


const PieChart = () => {
    const seriesData = [5, 10, 15];
    const optionsData = {
        // chart: {
        //     width: 380,
        //     type: 'pie',
        // },
        labels: ['Team A', 'Team B', 'Team C',],
        // responsive: [{
        //     breakpoint: 480,
        //     // options: {
        //     //     chart: {
        //     //         width: 200
        //     //     },
        //     //     legend: {
        //     //         position: 'bottom'
        //     //     }
        //     // }
        // }]
    }
    return (
        <div id="pieChart" >
            <ReactApexChart options={optionsData} series={seriesData} type="pie" width={380} />
        </div >
    );

}

export default PieChart

// const domContainer = document.querySelector('#piechart');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
