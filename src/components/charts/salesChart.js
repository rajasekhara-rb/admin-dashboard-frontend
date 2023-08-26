import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesChart extends React.Component {
    constructor(props) {
        super(props);
        // const salesData = this.props.sales;
        // console.log(salesData)
        this.state = {
            // data: [
            //     this.props.monthlySales
            // ],
            series: [{
                name: "Sales",
                data: this.props.amounts
                // [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            noData: {
                text: 'Loading...'
            },
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Sales',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: this.props.labels
                    // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },


        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}
export default SalesChart;