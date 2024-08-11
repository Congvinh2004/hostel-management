import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeNavbar.scss';
class HomeNavbar extends Component {

    render() {
        const { isLoggedIn } = this.props;

        return (
            <>

                <div className="container-navbar" >
                    <div className='header'>
                        <span className='title'>QUẢN LÝ NHÀ TRỌ</span>
                        <span className='discription'>SIMPLE HOUSE</span>
                        <span className='name'>Xin chào, ĐẶNG CÔNG VINH</span>

                    </div>

                    <div className='control'>
                        <ul className='list-control'>
                            <li className='option option-1'>
                                <div>
                                    <i className="fas fa-home"></i>
                                    <span>
                                        Trang chủ
                                    </span>

                                </div>
                            </li>
                            <li className='option option-2'>
                                <i className="fas fa-door-open"></i>
                                <span>
                                    Phòng
                                </span>
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








            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavbar);
