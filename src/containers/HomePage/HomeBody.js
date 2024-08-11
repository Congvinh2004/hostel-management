import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeBody.scss';
import RoomDetail from './RoomDetail';
import Select from 'react-select'

class HomeNavbar extends Component {

    render() {
        const { isLoggedIn } = this.props;
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
                        <div className='infor-motel'>



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
                            <div className="footer-section">
                                <h4>Quản lý Nhà Trọ</h4>
                                <p>Công cụ quản lý nhà trọ tiện lợi, dễ sử dụng và hiệu quả</p>
                            </div>

                            <div className="footer-content">
                                <div className="footer-section">
                                    <h5>Liên hệ</h5>
                                    <p>Email: support@quanlynha.com</p>
                                    <p>Điện thoại: 0123 456 789</p>
                                    <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
                                </div>

                                <div className="footer-section">
                                    <h5>Hỗ trợ</h5>
                                    <p><a href="/faq">Câu hỏi thường gặp</a></p>
                                    <p><a href="/support">Trung tâm hỗ trợ</a></p>
                                    <p><a href="/privacy">Chính sách bảo mật</a></p>
                                </div>

                                <div className="footer-section">
                                    <h5>Theo dõi chúng tôi</h5>
                                    <a href="#"><i className="fab fa-facebook"></i>Facebook</a>
                                    <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                                    <a href="#"><i class="fab fa-instagram"></i>Instagram</a>
                                </div>
                            </div>

                            <div className="footer-copyright">
                                <p>&copy; 2024 Quản lý Nhà Trọ. Mọi quyền được bảo lưu.</p>
                            </div>
                        </div>
                    </footer>
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
