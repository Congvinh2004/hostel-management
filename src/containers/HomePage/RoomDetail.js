import React, { Component } from 'react';
import { connect } from "react-redux";
import './RoomDetail.scss'
import { FormattedMessage } from 'react-intl';

class RoomDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }


    }

    render() {

        return (
            <>
                <div className='room-detail-container'>
                    <div className='room-header'>
                        <i className="fas fa-home"></i>
                        <span>
                            Phòng 1.01

                        </span>
                    </div>
                    <div className='room-body'>
                        <div className='room-body-control'>
                            <button className='checkout'>Trả</button>
                            <button className='view'>Xem</button>

                        </div>
                        <div className='room-body-infor'>
                            <div className='name-customer'>
                                <i className="fas fa-user"></i>
                                <span>
                                    Cao Thị Thanh

                                </span>
                            </div>
                            <div className='price'>
                                <i className="fas fa-money-check-alt"></i>
                                <span>
                                    1.800.000đ

                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='room-footer'>
                        <button className='edit-infor-room'><i className="fas fa-edit" style={{ color: "#FFFFFF" }}></i>Chỉnh sửa</button>
                        <button className='delete-room'><i className="fas fa-trash-alt" style={{ color: "#FFFFFF" }}></i>Xóa</button>
                    </div>


                </div >

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);
