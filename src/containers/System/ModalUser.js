import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpenModal}
                toggle={() => this.toggle()}
                className='modal-user-container'
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className='input-container'>
                            <label>Username</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' />
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input type='text' />
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input type='text' />
                        </div>
                        <div className='input-container max-width-container'>
                            <label>Address</label>
                            <input type='text' />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.toggle()}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
