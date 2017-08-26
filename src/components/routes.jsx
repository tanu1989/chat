import React from 'react';
import { IndexRedirect, Route, hashHistory, browserHistory } from 'react-router';
import Login from '../components/Login/Login';
import Chatroom from '../components/Chatbox/Chatroom'

function getRoutes(store) {

    // Publish the location to the store
    browserHistory.listen(location => {
        store.dispatch({
            type: 'FETCH_LOCATION',
            payload: location
        });
    });

    return (
        <Route name="root">
            <IndexRedirect to="/" />
            <Route name="Login" path="/" component={Login}/>
            <Route name="Chatroom" path="chatroom" component={Chatroom} />
        </Route>
    )

}

export default getRoutes;