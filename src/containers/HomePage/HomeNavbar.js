import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeNavbar.scss';
import { path } from '../../utils';
import { withRouter } from 'react-router-dom';

class HomeNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPath: ''
        }
    }

    handleNavigation = (path) => {
        this.props.history.push(path); // Thêm điều hướng để thay đổi URL
        // this.props.handleGetTypePath(path);
    }

    render() {
        return (
            <div className="container-navbar">
                <div className='header'>
                    <span className='title'>QUẢN LÝ NHÀ TRỌ</span>
                    <span className='discription'>SIMPLE HOUSE</span>
                    <span className='name'>Xin chào, ĐẶNG CÔNG VINH</span>
                </div>

                <div className='control'>
                    <ul className='list-control'>
                        <li className='option option-1'
                            onClick={() => this.handleNavigation(path.HOMEPAGE)}>
                            <div>
                                <i className="fas fa-home"></i>
                                <span >
                                    Trang chủ
                                </span>
                            </div>
                        </li>
                        <li className='option option-2'
                            onClick={() => this.handleNavigation(path.ROOM)}
                        >
                            <div>

                                <i className="fas fa-door-open"></i>
                                <span >
                                    Phòng
                                </span>

                            </div>
                        </li>
                        <li className='option option-3'>
                            <i className="fas fa-bolt"></i>
                            <span>
                                Chỉ số điện
                            </span>
                        </li>
                        <li className='option option-4'>
                            <i className="fas fa-tint"></i>
                            <span>
                                Chỉ số nước
                            </span>
                        </li>
                        <li className='option option-5'>
                            <i className="fas fa-calculator"></i>
                            <span>
                                Tính tiền
                            </span>
                        </li>
                    </ul>
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

export default withRouter(connect(mapStateToProps)(HomeNavbar));
