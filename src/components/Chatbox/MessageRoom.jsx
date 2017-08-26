import React from 'react';
import {Col, Row, Well} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import LoadingSpinner from '../general/LoadingSpinner';



class MessageRoom extends React.Component {

    static propTypes = {
        room: PropTypes.object,
        login: PropTypes.object,
        roomMessages: PropTypes.object,
        postMessage: PropTypes.func

    }

    render() {

        const {room, login, roomMessages, postMessage} = this.props;

        return (
            <Col className="full-height message-room">
                <Row className="mHeader">
                    <Header room={room} login={login}/>
                </Row>
                <Row id='content' className="mContent">
                   <Message login={login} roomMessages={roomMessages}/>
                </Row>
                <Row className="mFooter">
                    <Footer onPost={postMessage}/>
                </Row>

                </Col>
        )
    }
}

export default MessageRoom;