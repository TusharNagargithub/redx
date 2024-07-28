import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { state } from "@angular/animations";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: { posts: { [x: string]: any; }; }, props: { id: string | number; }) => {
    return state.posts["find"]((post: { id: string | number; }) => post.id === props.id);
});