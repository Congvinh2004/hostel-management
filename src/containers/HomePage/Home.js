import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';  // Import Pie từ react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Home.scss';
import RoomDetail from './RoomDetail';
import HomeNavbar from './HomeNavbar';
import Select from 'react-select';
// import { BarChart } from '@mui/x-charts/BarChart';
ChartJS.register(ArcElement, Tooltip, Legend);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            chartData: {
                labels: ['Đang thuê', 'Phòng trống'],
                datasets: [
                    {
                        label: '# of Votes',
                        // data: [12, 19, 3],
                        data: [6, 4],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',

                        ],
                        borderWidth: 1,
                    },
                ],
            },
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(75,192,192,0.2)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                        hoverBorderColor: 'rgba(75,192,192,1)',
                        data: [65, 59, 80, 81, 56, 55, 40],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            }
        }
    }
    handleOnclick = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        });
    }

    render() {
        const { isLoggedIn } = this.props;
        console.log('check isLoggedIn: ', isLoggedIn)
        return (
            <div className='home-container'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-6 room-manager'>
                            <div className='chart'>
                                <Pie
                                    data={this.state.chartData}
                                />

                            </div>
                        </div>

                        <div className='col-6 revenue'>
                            <div className='chart'>
                                {/* <BarChart data={this.state.data} options={this.state.options} /> */}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='chart'>
                                <Pie
                                    data={this.state.chartData}
                                />

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='chart'>
                                <Pie
                                    data={this.state.chartData}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
