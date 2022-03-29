import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, phone, email , id} = props.friend;
    const navigate = useNavigate()

    const showFriendDetails = ()=>{
        const path =   `/friends/${id}`;
        navigate(path)
    }
    return (
        <div className='item-fr'>
            <h1>{name}</h1>
            <p>Cell: {phone}</p>
            <p>Email: {email}</p>
            <Link to={'/friends/'+id}>Click me</Link>
            <button onClick={showFriendDetails}>{username}</button>
        </div>
    );
};

export default Friend;