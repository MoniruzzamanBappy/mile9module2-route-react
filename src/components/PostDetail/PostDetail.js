import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    console.log(typeof postId)
    const [post, setPost] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
        <div>
            <h1>Post details for: {postId}</h1>
            <h1>Name: {post?.title}</h1>
            <p>Body: {post?.body}</p>
        </div>
    );
};

export default PostDetail;