import { Action, createReducer, on } from "@ngrx/store";
import { initialState, PostsState } from "./posts.state";
import { addPost } from "./posts.actions";
import { state } from "@angular/animations";

export const _postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {// here action is an argument
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();

        return {
            ...state,
            posts: [...state.posts,post],
        }
    })
);

export function postReducer(state: PostsState | undefined,action: Action){
    return _postReducer(state,action);
}