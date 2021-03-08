import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editPost} from '../actions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
`
const InputField = styled(TextField)`
    width: 500px;
`
function Edit() {
    const posts = useSelector(state => state.posts);
    let {id} = useParams();
    let editpost = posts.find(item => Number(item.id) === Number(id));
    const initialFieldValues = {
        id: editpost.id,
        title: editpost.title,
        synopsis: editpost.synopsis,
        director: editpost.director,
    }
    const [values, setValues] = useState(initialFieldValues);
    const dispatch = useDispatch()
    const handleInputChange = (e)=> {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(editPost(values))
    }
    return (
        <Paper elevation={3} style={{width: '700px', padding: '50px 0px', margin: '0 auto'}}>
            <Typography variant='h6' align='center' color='textPrimary'>Edit Post</Typography>
            <hr />
           <Form onSubmit={handleSubmit} noValidate autoComplete="off">
            <InputField id="title" name='title' type='text' label="Title" variant="outlined" onChange={handleInputChange} value={values.title} />
            <InputField id="synopsis" name='synopsis' type='text' label="Synopsis" multiline variant="outlined" onChange={handleInputChange} value={values.synopsis}/>
            <InputField id="director" name='director' type='text' label="Director" variant="outlined" onChange={handleInputChange} value={values.director}/>
            <InputField id='post-id' name='id' type='hidden' onChange={handleInputChange} value={values.id} />
            <Button variant='contained' color='primary' type='submit'>Edit</Button>
            </Form> 
        </Paper>
    )
}

export default Edit
