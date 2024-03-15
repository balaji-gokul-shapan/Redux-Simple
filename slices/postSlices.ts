import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : any = [
    {id: 0, title: "post1", body: "description1",}
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        addPost:(state, action: PayloadAction<any>) =>{
            const {id, title, body} = action.payload;
            state.push({id, title, body});
        },
        deletePost: (state, action: PayloadAction<any>) => {
        const postId = action.payload;
        return state.filter((post: any) => post.id !== postId)
        }
    }
});

export const {addPost, deletePost} = postSlice.actions;
export default postSlice.reducer