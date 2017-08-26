import React from 'react';
import LoadingSpinner from '../general/LoadingSpinner';

const Header = ({room, login}) => {

    if(room.loading && !room.detail){
        return <LoadingSpinner/>
    }else if(!room.loading && room.detail){
        const {detail} = room;
        const filterArr = detail.users.filter((a) => {
            return a !== login.user;
        })
        const userList = filterArr.join(', ');
        return(
            <div>
                <h2 className="header-room gray">{detail.name}</h2>
                <h5 className="header-users gray"><span className="cpink">{login.user}</span>, {userList}</h5>
            </div>
        )
    }else {
        return null;
    }


}

export default Header;