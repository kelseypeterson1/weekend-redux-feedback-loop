import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Comments from '../Comments/Comments.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Support from '../Support/Support.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Review from '../Review/Review.jsx';
import SubmissionComplete from '../SubmissionComplete/SubmissionComplete.jsx';
import Admin from '../Admin/Admin.jsx';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Router>

      {/* MUI nav bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ background: '#071108' }}
          position="static"
        >
          <Toolbar>
            <IconButton
              style={{ background: '#c7dbe6' }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="h8">
                  <Link
                    to='/'
                    style={{ textDecoration: 'none' }}
                  >
                    Start Application
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="h8">
                  <Link
                    to='/Admin'
                    style={{ textDecoration: 'none' }}
                  >
                    Admin
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      {/* END MUI nav bar */}


      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Feedback</h1>
          <h4>Feedback for everyone</h4>
        </header>

        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/complete">
          <SubmissionComplete />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

      </div>
    </Router>
  );
}

export default App;
