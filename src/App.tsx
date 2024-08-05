import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userAction} from "./slices/userSlice";

function App() {

let {userSlice: {users, IsLoaded}} = useAppSelector(state => state);
let dispatch = useAppDispatch()

useEffect(() => {
dispatch(userAction.loadUsers())
  }, []);

  return (
    <div>
      {!IsLoaded && <div>Loading in process....</div>}
      {users.map(user => <div>{user.name}</div>)}

    </div>
  );
}

export default App;
