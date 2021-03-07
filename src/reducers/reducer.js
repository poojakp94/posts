import {LIKE_POST, DISLIKE_POST} from '../actions';

const initialState = {
    posts: [
    {
      id: 1,
      title: "When Marnie Was There",
      synopsis:
        "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      director: "Hiromasa Yonebayashi",
      airing_start: "2014",
      alt: "poster",
      score: 7.82,
      episodes: 1,
      type: "Movie",
    },
    {
      id: 2,
      title: "The Tale of the Princess Kaguya",
      synopsis:
        "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
      director: "Isao Takahata",
      airing_start: "2013",
      alt: "poster",
      score: 8.82,
      episodes: 1,
      type: "Movie",
    },
    {
      id: 3,
      title: "The Wind Rises",
      synopsis:
        "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
      director: "Hayao Miyazaki",
      airing_start: "2013",
      alt: "poster",
      score: 7.8,
      episodes: 1,
      type: "Movie",
    }
],
likedPosts: [1],
dislikedPosts: [2]
}

const reducer = (state = initialState, action)=> {
    const { type, payload } = action;
    switch(type){
        case LIKE_POST: {
            const { id } = payload;
            return { ...state, likedPosts: [...state.likedPosts, id] };
        }
        case DISLIKE_POST: {
          const { id } = payload;
          return { ...state, dislikedPosts: [...state.dislikedPosts, id] };
        }
        default:
            return state;       
    }
}



export default reducer;