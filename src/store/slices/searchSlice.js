import { createSlice } from '@reduxjs/toolkit';
import { searchService } from '../services/searchService';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        result:{},
        searchChat: [{ "role": "system", "content": "You are a helpful assistant." }],
        googleResult:{}
    },
    reducers: {
        setResult: (state,action) => {
            state.result = action.payload
        },
        setSearchChat:(state,action)=>{
            state.searchChat = action.payload
        },
       setGoogleResult:(state,action)=>{
        state.googleResult = action.payload
       }
    },
});

export const { setResult,setSearchChat,setGoogleResult} = searchSlice.actions;

export const searchFetch = (payload) => (dispatch) => {
    return searchService.searchFetch(payload).then((response) => {
        dispatch(setResult(response));
        return response;
    }, (error) => {
        return error;
    }
    );
}

export const searchGoogle = (payload) => (dispatch) => {
    return searchService.searchGoogle(payload).then((response) => {
        dispatch(setGoogleResult(response));
        return true;
    }, (error) => {
        return false;
    }
    );
}

export const selectResult = (state) => state.search.result;
export const selectSearchChat = (state)=>state.search.searchChat;
export const selectSearchGoogle = (state) => state.search.googleResult;

export default searchSlice.reducer