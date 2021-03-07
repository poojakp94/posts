import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from 'react-redux';
import { likePost, dislikePost } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

function PostCard({data}) {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="movie" className={classes.avatar}> 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${data.title}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.synopsis}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=>dispatch(likePost(data.id))}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="add to not-favorites" onClick={()=>dispatch(dislikePost(data.id))}>
          <ThumbDownIcon />
        </IconButton>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
    )
}

export default PostCard
