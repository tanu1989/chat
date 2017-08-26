import React from 'react';
import PropTypes from 'prop-types'
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap';

class Footer extends React.Component {

    static propTypes = {
        onPost: PropTypes.func
    }

    state = {
        message: ''
    }

    onTextChange = (e) => {

        let val = e.currentTarget.value;
        this.setState(() => ({
            message: val
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.message !== ''){
            const val = this.state.message;
            this.setState(() => ({
                message: ''
            }),  this.props.onPost(val))

        }
    }


    render(){
        return(<div>
            <div  className="message-form">
                <FormGroup controlId="message">
                    <FormControl
                        type="text"
                        bsSize="large"
                        value={this.state.message}
                        onChange={this.onTextChange}
                        placeholder="Type a message..."
                    />
                    <Button bsSize="large" type="submit" onClick={this.onSubmit}>Send</Button>
                </FormGroup>
            </div>

        </div>)
    }
}
export default Footer;