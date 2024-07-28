import { Post } from "src/app/models/posts.model"

export interface PostsState {
    posts:Post[];
}

export const initialState: PostsState = {
    posts: [
        {id: '1', title: 'sample Title 1', description:'sample description 1'},
        {id: '2', title: 'sample Title 2', description:'sample description 2'},
    ]
}