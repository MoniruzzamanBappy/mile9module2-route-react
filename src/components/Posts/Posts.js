import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>Hello posts</h1>
            <p>Number of posts: {posts.length}</p>
            {
                posts.map(post=><Link key={post.id}
                to={`/posts/${post.id}`}
                >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;