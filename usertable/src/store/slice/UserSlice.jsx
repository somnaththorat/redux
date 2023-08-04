import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload,1)
        },
        removeAllUser(state, action) {
            state.length = 0
        },
    }
});

export default  usersSlice ;

export const {addUser, removeUser, removeAllUser}  =  usersSlice.actions;
