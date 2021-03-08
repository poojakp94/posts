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


function Home() {
    const posts = useSelector(state => state.posts)

    return (
        <>  
            <Typography variant='h6' align='center' color='textPrimary' style={{borderBottom: '3px solid blue', width:' 200px', margin: '0 auto'}}>
                 All Posts</Typography>          
            <Container>
            {posts.map((item)=> <PostCard key={item.id} data={item}/>)}
            </Container>
        </>
    )
}

export default Home
