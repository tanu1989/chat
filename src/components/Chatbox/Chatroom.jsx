import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Col, Row} from 'react-bootstrap';
import NavigationBanner from './NavigationBanner';
import MessageRoom from './MessageRoom';
import {
    getRooms,
    fetchUsers,
    getMessages,
    postMessage
} from './actions';

class Chatroom extends React.Component {

    static propTypes = {
        getRooms: PropTypes.func.isRequired,
        getMessages: PropTypes.func,
        fetchUsers: PropTypes.func,
        postMessage: PropTypes.func,
        login: PropTypes.object,
        rooms : PropTypes.object,
        room: PropTypes.object,
        roomMessages: PropTypes.object
    }

    componentWillMount(){
        this.props.getRooms();
    }

    componentDidUpdate(){

    }

    handleChangeRoom = (selectedRoom) => {
        this.props.fetchUsers(selectedRoom);
        this.props.getMessages(selectedRoom);
    };

    handlePostMessage = (message) =>{
        const {user} = this.props.login;
        const {detail} = this.props.room;

        this.props.postMessage(detail.id, user, message);
    }

    render(){
        const {login, rooms, room, roomMessages} = this.props;
        return(
            <Grid className="chatroom-grid full-height" fluid>
               <NavigationBanner login={login} rooms={rooms} room={room} onChangeRoom={this.handleChangeRoom}/>
                <MessageRoom
                    room={room}
                    login={login}
                    roomMessages={roomMessages}
                    postMessage={this.handlePostMessage}
                />
            </Grid>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        login: state.login,
        rooms: state.chatRoom.rooms,
        room: state.chatRoom.room,
        roomMessages: state.messages.roomMessages
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getRooms: () => dispatch(getRooms()),
        fetchUsers: (id) => dispatch(fetchUsers(id)),
        getMessages: (id) => dispatch(getMessages(id)),
        postMessage: (id, name, message) => dispatch(postMessage(id, name, message))
    }
}

export {Chatroom};
export default connect(mapStateToProps,mapDispatchToProps) (Chatroom);