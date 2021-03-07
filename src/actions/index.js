export const LIKE_POST = 'LIKE_POST';
export const DISLIKE_POST = 'DISLIKE_POST';

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

