import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div>
            <h1>Hello to Friend</h1>
            <p>Amount of friend: {friends.length}</p>
            <div className='friend'>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;