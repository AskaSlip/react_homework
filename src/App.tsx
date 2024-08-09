import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {postsActions} from "./slices/postSlice";

const App = () => {

  let {postSlice: {posts,IsLoaded}} = useAppSelector(state => state);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postsActions.loadPosts());
  }, []);


  return (
      <div>
        {!IsLoaded && <div>Loading in process....</div>}

        {posts.map(post => <div>{post.id}: {post.title}</div>)}
      </div>
  );
}


export default App;
