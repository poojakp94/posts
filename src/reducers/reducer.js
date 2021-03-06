import {LIKE_POST, DISLIKE_POST, CREATE_POST, EDIT_POST, SEARCH_POST} from '../actions';

const initialState = {
    posts: [
    {
      id: 1,
      title: "When Marnie Was There",
      synopsis:
        "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
      director: "Hiromasa Yonebayashi",
    },
    {
      id: 2,
      title: "The Tale of the Princess Kaguya",
      synopsis:
        "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
      director: "Isao Takahata",
    },
    {
      id: 3,
      title: "The Wind Rises",
      synopsis:
        "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
      director: "Hayao Miyazaki",
    },
    {
      id: 4,
    title: "From Up on Poppy Hill",
    synopsis:
      " The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
    director: "Gorō Miyazaki",
    },
    {
      id: 5,
    title: "Arrietty",
    synopsis:
      "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    director: "Hiromasa Yonebayashi",
    },
    {
      id: 6,
    title: "Ponyo",
    synopsis:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: "Hayao Miyazaki",
    },
    {
      id: 7,
    title: "Tales from Earthsea",
    synopsis:
      "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
    director: "Gorō Miyazaki",
    },
    {
      id: 8,
    title: "Howl's Moving Castle",
    synopsis:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    director: "Hayao Miyazaki",
    },
    {
      id: 9,
    title: "The Cat Returns",
    synopsis:
      "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    director: "Hiroyuki Morita",
    },
    {
      id: 10,
    title: "Spirited Away",
    synopsis:
      " Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    director: "Hayao Miyazaki",
    }
],
likedPosts: [1, 2, 3, 4],
dislikedPosts: [5, 6, 7, 8],
searchText: '',
}

const reducer = (state = initialState, action)=> {
    const { type, payload } = action;
    switch(type){
        case LIKE_POST: {
            const { id } = payload;
            const filteredDislikedPosts = state.dislikedPosts.filter(item => !(item === id))
            return { ...state, likedPosts: [...state.likedPosts, id], dislikedPosts: [...filteredDislikedPosts]};
        }
        case DISLIKE_POST: {
          const { id } = payload;
          const filteredlikedPosts = state.likedPosts.filter(item => !(item === id))
          return { ...state, likedPosts: [...filteredlikedPosts], dislikedPosts: [...state.dislikedPosts, id] };
        }
        case CREATE_POST: {
          const { newPost } = payload;
          return {...state, posts:[...state.posts, {...newPost, id: state.posts.length + 1}]}
        }
        case EDIT_POST: {
          const { post } = payload;
          const filterEditPost = state.posts.filter(item => !(item.id === post.id));
          return{...state, posts:[...filterEditPost, post]}
        }
        case SEARCH_POST: {
          const {text} = payload;
          return{...state, searchText: text}
        }
        default:
            return state;       
    }
}



export default reducer;