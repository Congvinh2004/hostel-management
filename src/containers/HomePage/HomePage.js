import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss';
import HomeNavbar from './HomeNavbar';
import HomeBody from './HomeBody';
import CustomScrollbars from '../../components/CustomScrollbars';
class HomePage extends Component {

    render() {
        const { isLoggedIn } = this.props;

        return (
            <>
                <div className='home-container'>
                    <div className='content-left'>
                        <HomeNavbar />

                    </div>

                    <div className='content-right'>
                        <CustomScrollbars>

                            <HomeBody />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
