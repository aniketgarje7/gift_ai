import { createSlice } from '@reduxjs/toolkit';
import { searchService } from '../services/searchService';
import { toast } from 'react-toastify';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        result: {},
        searchChat: [{ "role": "system", "content": "You are a helpful assistant." }]
    },
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload
        },
        setSearchChat: (state, action) => {
            state.searchChat = action.payload
        }

    },
});

export const { setResult, setSearchChat } = searchSlice.actions;

export const searchFetch = (payload) => (dispatch) => {
    return searchService.searchFetch(payload).then((response) => {
        dispatch(setResult(response));
        if(response.error){
            toast.error(response.error.message || 'Error occured,plese try again.');
        }
        return response;
    }, (error) => {
        console.log(error,'error');
        return error;
    }
    );
}


export const selectResult = (state) => state.search.result;
export const selectSearchChat = (state) => state.search.searchChat;

export default searchSlice.reducer;