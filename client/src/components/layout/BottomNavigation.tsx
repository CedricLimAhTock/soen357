import { useLocation } from 'wouter';
import { 
  Paper, 
  BottomNavigation as MuiBottomNavigation, 
  BottomNavigationAction 
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Search as SearchIcon, 
  AddCircleOutline as AddIcon, 
  Timeline as TimelineIcon, 
  Person as PersonIcon 
} from '@mui/icons-material';

export default function BottomNavigation() {
  const [location, setLocation] = useLocation();
  
  // Map path to navigation value
  const getNavigationValue = () => {
    switch(location) {
      case '/': return 0;
      case '/recipes': return 1;
      case '/log-food': return 2;
      case '/progress': return 3;
      case '/profile': return 4;
      default: return 0;
    }
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    switch(newValue) {
      case 0:
        setLocation('/');
        break;
      case 1:
        setLocation('/recipes');
        break;
      case 2:
        setLocation('/log-food');
        break;
      case 3:
        setLocation('/progress');
        break;
      case 4:
        setLocation('/profile');
        break;
    }
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        display: { xs: 'block', md: 'none' },
        zIndex: 10,
        borderRadius: 0
      }} 
      elevation={3}
    >
      <MuiBottomNavigation
        showLabels
        value={getNavigationValue()}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Recipes" icon={<SearchIcon />} />
        <BottomNavigationAction label="Log Food" icon={<AddIcon />} />
        <BottomNavigationAction label="Progress" icon={<TimelineIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </MuiBottomNavigation>
    </Paper>
  );
}
