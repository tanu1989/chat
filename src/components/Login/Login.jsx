import React from 'react';
import { connect } from 'react-redux'
import {browserHistory, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import { setUser } from './actions';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import moment from 'moment';


class Login extends React.Component{

    static propTypes = {
        setUser: PropTypes.func.isRequired,
        login: PropTypes.object
    };

    state = {
        username: null,
        userValid: null
    };

    onTextChange = (e) => {
        const val = e.currentTarget.value;
        this.setState(() => ({
            userValid: null,
            username: val
        }))
    };

    enterChat = () => {
        const {username} = this.state;

        if(username){
            //plumbed in for login activity later
            var time = moment();
            this.props.setUser(username, time);
            browserHistory.push(`/chatroom`)
        }else
        {
            this.setState(() => ({
                userValid: 'error'
            }))
        }

    }

    render(){

        const {userValid} = this.state;
        return <div id="login">

            <FormGroup  validationState={userValid}>
                <FormControl
                    autoFocus
                    type="text"
                    bsSize="large"
                    onChange={this.onTextChange}
                    placeholder="Type your username..."
                />
                <FormControl.Feedback className="cpink"/>
            </FormGroup>
                    <Button bsSize="large"
                            block
                            className="pink"
                            onClick={this.enterChat}
                    >
                        Join the DoorDash chat!
                    </Button>

                </div>
    }
}

export const mapDispatchToProps = (dispatch) => {

    return {
        setUser: (username, time) => dispatch(setUser(username,time))
    }

};
export {Login};
export default connect(null, mapDispatchToProps)(Login);