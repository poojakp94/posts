import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createPost} from '../actions';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    width: inherit;
`
const InputField = styled(TextField)`
    width: 500px;
`
const initialFieldValues = {
    title: '',
    synopsis: '',
    director: '',
}
function CreatePost() {
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
        dispatch(createPost(values))
    }
    return (
        <Paper elevation={3} style={{width: '700px', padding: '50px 0px', margin: '0 auto'}}>
            <Typography variant='h6' align='center' color='textPrimary'>Create Post</Typography>
           <hr />
           <Form onSubmit={handleSubmit} noValidate autoComplete="off">
            <InputField id="title" name='title' type='text' label="Title" variant="outlined" onChange={handleInputChange} value={values.title} />
            <InputField id="synopsis" name='synopsis' type='text' label="Synopsis" multiline variant="outlined" onChange={handleInputChange} value={values.synopsis}/>
            <InputField id="director" name='director' type='text' label="Director" variant="outlined" onChange={handleInputChange} value={values.director}/>
            <Button variant='contained' color='primary' type='submit'>Create</Button>
            </Form> 
        </Paper>
    )
}

export default CreatePost
