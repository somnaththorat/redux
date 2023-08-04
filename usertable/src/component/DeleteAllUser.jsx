import React from "react";
import {useDispatch} from 'react-redux'
import { removeAllUser } from '../store/slice/UserSlice';

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const DeleteAllUsers = () =>{
      console.log('deleting all user');
    dispatch(removeAllUser());
  }
  return (
  <button onClick={()=> DeleteAllUsers()}>DeleteAllUser</button>
  )
};