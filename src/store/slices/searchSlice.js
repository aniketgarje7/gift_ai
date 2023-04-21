import { createSlice } from '@reduxjs/toolkit';
import { searchService } from '../services/searchService';

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
        return response;
    }, (error) => {
        return error;
    }
    );
}


export const selectResult = (state) => state.search.result;
export const selectSearchChat = (state) => state.search.searchChat;

export default searchSlice.reducer;