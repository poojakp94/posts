import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  flex: 1;
`;
const ErrorWrapper = styled(Wrapper)`
  display: block;
  text-align: center;
`

const ContentWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 50px;
  
`;


function Readmore() {
    const posts = useSelector(state => state.posts)
    let {id} = useParams();
    let found = posts.find(item => Number(item.id) === Number(id));
    return (
        <Wrapper>
      {found ? <>
      <ContentWrapper>
        <Typography variant='h6'>{found.title}</Typography>
        <Typography variant='subtitle1'>Synopsis : 
        <Typography variant='body2'>{found.synopsis}</Typography>
        </Typography>
        
        <Typography variant='body2'>Director: {found.director}</Typography>
        
      </ContentWrapper></> : 
      <ErrorWrapper> 404 Item not found!</ErrorWrapper>
      }
    </Wrapper>
    )
}

export default Readmore
