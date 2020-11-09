import react from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import useStyles from './style';

const Posts = () => {
    // @ts-ignore
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        <>
            <h1 className="">POSTS</h1>
            <Post />
            <Post />
        </>
    );
}


export default Posts;          