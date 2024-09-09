import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomePage.scss';
import HomeNavbar from './HomeNavbar';
import Home from './Home';
import { path } from '../../utils';
import CustomScrollbars from '../../components/CustomScrollbars';
import DetailInforRooms from './DetailInforRooms';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: '/home'
        }
    }

    handleGetTypePath = (data) => {
        this.setState({
            activeComponent: data
        });
    }

    render() {
        const { isLoggedIn } = this.props;
        // const { activeComponent } = this.state;

        console.log('check state: ', this.state.activeComponent)
        return (
            <>
                <div className='home-container'>
                    <div className='content-left'>
                        <HomeNavbar
                        // handleGetTypePath={this.handleGetTypePath}
                        />
                    </div>

                    <div className='content-right'>
                        <CustomScrollbars>
                            <Home />
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

export default connect(mapStateToProps)(HomePage);
