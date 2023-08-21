import React from "react";
import ReactApexChart from "react-apexcharts";


class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [44, 55, 13, 43, 22, 102],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', "Team F"],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <div id="pieChart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
        );
    }
}

export default PieChart

// const domContainer = document.querySelector('#piechart');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
