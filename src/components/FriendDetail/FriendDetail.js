import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendsId} = useParams();
    const [friend, setFriend] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendsId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p><small>City: {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetail;