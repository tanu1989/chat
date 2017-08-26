import React from 'react';
import {Well} from 'react-bootstrap'
import LoadingSpinner from '../general/LoadingSpinner';


const Message = ({roomMessages, login}) => {

   if(roomMessages.loading && !roomMessages.messages) {
        return <LoadingSpinner/>
   }else if(!roomMessages.loading && roomMessages.messages){
         return (
             <div>
                 {roomMessages.messages.map((message) => {
                     const sameUser = login.user === message.name ? 'self message-banner gray' : 'message-banner gray'
                         return (<div className={sameUser}>
                             <Well>{message.message}</Well>
                             <span>{message.name}</span>
                         </div>)


                 })}
             </div>

         )
    }else {
        return null;
    }

}

export default Message;