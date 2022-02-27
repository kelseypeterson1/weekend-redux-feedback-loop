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
import Button from '@mui/material/Button';
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
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              // edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}

      <IconButton
        size="large"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>Start Application</Link>
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
          <Link to='/Admin'>Admin</Link>
            </Typography>
        </MenuItem>
      </Menu>
            
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* END MUI nav bar */}

      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
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
