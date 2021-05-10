import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setPosts(data));
    },[])

    return (
        <div>
            <h2>This is Home</h2>
            <p>I have got {posts.length} posts</p>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;