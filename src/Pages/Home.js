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
    const posts = useSelector(state => state)
    const searchRegex = new RegExp(posts.searchText, 'i');

    return (
        <>  
            <Typography variant='h6' align='center' color='textPrimary' style={{borderBottom: '3px solid blue', width:' 200px', margin: '0 auto'}}>
                 All Posts</Typography>          
            <Container>
            {posts.posts.filter(item=>item.title.match(searchRegex) ||item.synopsis.match(searchRegex) ).map((item)=> <PostCard key={item.id} data={item}/>)}
            </Container>
        </>
    )
}

export default Home
