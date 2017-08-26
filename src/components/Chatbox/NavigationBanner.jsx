import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Col,Nav,NavItem,Well} from 'react-bootstrap';
import LoadingSpinner from '../general/LoadingSpinner';
import {last} from 'lodash';


class NavigationBanner extends React.Component {

    static propTypes = {
        login: PropTypes.object,
        rooms : PropTypes.object,
        onChangeRoom: PropTypes.func
    }

    state = {
        activeRoomNumber: null
    }

    componentDidUpdate(prevProps){

        if(!prevProps.rooms.roomDetails && this.props.rooms.roomDetails){
            this.props.onChangeRoom(this.props.rooms.roomDetails[0].id);
            this.setState({
                activeRoomNumber:this.props.rooms.roomDetails[0].id
            })
        }

    }
    changeNavItem =(val) => {
        const roomNum = val;
        this.setState(()  => ({
            activeRoomNumber : roomNum
        }),  this.props.onChangeRoom(roomNum));

    }

    render() {

        const {login, rooms} = this.props;

        const user = login.user ;
        return (
            <Col xs={2} className="pink full-height navigation-banner">
                <Well className="pink">
                    <h3>{user}</h3>
                    <h6>Online for XX minutes</h6>
                </Well>

                {(!rooms.loading && rooms.roomDetails) ?
                    <Nav bsStyle="pills" activeKey={this.state.activeRoomNumber} stacked>
                    {rooms.roomDetails.map((room) => {
                        return <NavItem eventKey={room.id} onSelect={this.changeNavItem}>{room.name}</NavItem>
                    })}
                    </Nav>

                : <LoadingSpinner/>}

            </Col>
        )
    }
}

export default NavigationBanner;