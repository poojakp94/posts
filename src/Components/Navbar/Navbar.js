
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
import { useState} from "react";
import styled from 'styled-components';
import './navbar.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
  }));

  const Link = styled(NavLink)`
    text-decoration: none;
    color:white;
    &:hover {
      color: coral;
    }
  `
  const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 0 20px;
  `
  function Navbar () {
    const classes = useStyles();
    
  return (
      <>
        <AppBar position="static" style={{marginBottom: '40px', backgroundColor: '#0F171E'}}>
                <Toolbar>
                    <Typography className={classes.title} variant="subtitle1" noWrap>
                    <Link
                        to="/"
                        exact={true}
                        activeClassName="is-active">
                        Posts
                    </Link>
                    </Typography>
                    <Wrapper>
                    <Link
                        to="/likes"
                        exact={true}
                        activeClassName="is-active"
                        >
                          Liked Posts
                    </Link>
                    <Link
                        to="/dislikes"
                        exact={true}
                        activeClassName="is-active">
                            Disliked Posts
                    </Link>
                    <Link 
                    to='/create'
                    exact={true}
                    activeClassName="is-active">
                        Create Post
                    </Link>
                    </Wrapper>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    
                </Toolbar>
            </AppBar>
      </>
  )
  }

  export default Navbar;

  