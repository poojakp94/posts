import styled from 'styled-components';
import PostCard from '../Components/PostCard';
import { useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
    padding: 40px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
`


function Dislike() {
    const posts = useSelector(state => state);
    
    return (   
        <>
        <Typography variant='h6' align='center' color='textPrimary' style={{borderBottom: '3px solid blue', width:' 200px', margin: '0 auto'}}>Disliked Posts</Typography>        
        
        <Container>
         {posts.posts.map((item)=>{
             if(posts.dislikedPosts.includes(item.id)){
                 return(
                     <PostCard data={item} key={item.id}/>
                 )
             }
         })}
        </Container>
        </>
    )

}

export default Dislike;