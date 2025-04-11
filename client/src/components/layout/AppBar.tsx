import { useState } from 'react';
import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Container,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Restaurant as RestaurantIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';
import { useLocation } from 'wouter';

interface AppBarProps {
  title?: string;
}

export default function AppBar({ title = "NutriPlate" }: AppBarProps) {
  const [, setLocation] = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setAnchorEl(null);
    setLocation('/profile');
  };

  return (
    <MuiAppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <RestaurantIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ 
              mr: 2, 
              fontWeight: 500, 
              letterSpacing: '.0rem', 
              color: 'inherit', 
              textDecoration: 'none',
              cursor: 'pointer',
              flexGrow: 1
            }}
            onClick={() => setLocation('/')}
          >
            {title}
          </Typography>

          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
