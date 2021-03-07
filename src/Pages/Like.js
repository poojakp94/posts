import styled from 'styled-components';
import PostCard from '../Components/PostCard';
import { useSelector, useDispatch} from 'react-redux';
import { likePost, dislikePost } from '../actions';

const Container = styled.div`
    padding: 50px;
    display: flex;
    gap: 20px;
    justify-content: center;
`


function Like() {
    const posts = useSelector(state => state)
    const dispatch = useDispatch()
    


    return (
         <>
        <Container>
         {posts.posts.map((item)=>{
             if(posts.likedPosts.includes(item.id)){
                 return(
                     <PostCard data={item} key={item.id}/>
                 )
             }
         })}
        </Container>
        </>
    )
}

export default Like;