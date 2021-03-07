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


function Home() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    


    return (
            
        <Container>
          {posts.map((item)=> <PostCard key={item.id} data={item}/>)}
        </Container>
    )
}

export default Home
