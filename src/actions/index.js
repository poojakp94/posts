export const LIKE_POST = 'LIKE_POST';
export const DISLIKE_POST = 'DISLIKE_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const SEARCH_POST = 'SEARCH_POST';

export const likePost = (id)=> {
    return {
        type: LIKE_POST,
        payload: { id }
    }
}

export const dislikePost = (id)=> {
    return {
        type: DISLIKE_POST,
        payload: { id }
    }
}

export const createPost = (newPost)=>{
    return {
        type: CREATE_POST,
        payload: { newPost }
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: { post}
    }
}

export const searchPost = (text)=> {
    console.log(text)
    return{
        type: SEARCH_POST,
        payload : {text}
    }
}