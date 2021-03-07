import styled from 'styled-components';
import PostCard from '../Components/PostCard';
import { useSelector} from 'react-redux';


const Container = styled.div`
    padding: 50px;
    display: flex;
    gap: 20px;
    justify-content: center;
`


function Dislike() {
    const posts = useSelector(state => state)
    
    
    return (           
        <Container>
         {posts.posts.map((item)=>{
             if(posts.dislikedPosts.includes(item.id)){
                 return(
                     <PostCard data={item} key={item.id}/>
                 )
             }
         })}
        </Container>
    )

}

export default Dislike;