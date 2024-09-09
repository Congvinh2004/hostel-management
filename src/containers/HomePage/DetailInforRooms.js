import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeBody.scss';
import RoomDetail from './RoomDetail';
import Select from 'react-select'
import ModalUser from '../System/ModalUser';
import HomeNavbar from './HomeNavbar';
import CustomScrollbars from '../../components/CustomScrollbars';
class DetailInforRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false
        }
    }



    handleOnclick = () => {

        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }
    render() {
        const { isLoggedIn } = this.props;
        let { isOpenModal } = this.state
        const optionsStatus = [
            { value: '1', label: 'Đã thuê' },
            { value: '2', label: 'Chưa thuê' },
        ]
        const optionsTypes = [
            { value: '1', label: 'Chưa thanh toán' },
            { value: '2', label: 'Đã thanh toán' },


        ]
        return (
            <>
                <div className="container-body" >
                    <div className='content-left'>
                        <HomeNavbar />
                    </div>
                    <div className='content-right'>
                        <ModalUser
                            isOpenModal={isOpenModal}
                            toggleFromParent={this.handleOnclick}
                        />
                        <CustomScrollbars>
                            <div className='manage-motel'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='form-group col-12'>
                                            <label>Danh sách phòng</label>

                                        </div>
                                        <div className='form-group col-6'>
                                            <Select
                                                options={optionsStatus}
                                                placeholder='Trạng thái phòng...'
                                            />
                                        </div>
                                        <div className='form-group col-6'>
                                            <Select
                                                options={optionsTypes}
                                                placeholder='Trạng thái phí...'
                                            />
                                        </div>
                                        <div className='form-group col-12 btn-search'>
                                            <button >
                                                <i className="fas fa-search"></i>

                                                Tìm kiếm
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='detail-infor-motel'>
                                <div className='control-motel'>
                                    <div className='infor-motel'>
                                        <span className='item-detail empty'>
                                            Còn trống: 10
                                        </span>
                                        <span className='item-detail rented'>
                                            Đã thuê: 12
                                        </span>
                                        <span className='item-detail no-charge'>
                                            Chưa thu phí: 0
                                        </span>

                                    </div>
                                    <div className='function-control'>
                                        <button onClick={() => this.handleOnclick()} className='btn-add'><i className="fas fa-plus"></i>Thêm phòng nhanh</button>

                                    </div>


                                </div>
                                <div className='list-room'>
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />
                                    <RoomDetail />

                                </div>



                            </div>
                            <footer className="footer">
                                <div className="footer-container">

                                    <div className="footer-content">
                                        <div className="footer-section">
                                            <h5>Liên hệ</h5>
                                            <p>Email: support@quanlynha.com</p>
                                            <p>Điện thoại: 0123 456 789</p>
                                            <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
                                        </div>

                                        <div className="footer-section footer-section-first">
                                            <h5>Hỗ trợ</h5>
                                            <p><a href="/faq">Câu hỏi thường gặp</a></p>
                                            <p><a href="/support">Trung tâm hỗ trợ</a></p>
                                            <p><a href="/privacy">Chính sách bảo mật</a></p>
                                        </div>

                                        <div className="footer-section footer-section-last">
                                            <h5>Theo dõi chúng tôi</h5>
                                            <div className='contact'>
                                                <a href="#">
                                                    <i className="fab fa-facebook-square"></i>
                                                    <span>Facebook</span></a>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                    <span>Facebook</span></a>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                    <span>Facebook</span></a>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="footer-copyright">
                                        <p>&copy; 2024 Quản lý Nhà Trọ. Mọi quyền được bảo lưu.</p>
                                    </div>
                                </div>
                            </footer>
                        </CustomScrollbars>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailInforRooms);
