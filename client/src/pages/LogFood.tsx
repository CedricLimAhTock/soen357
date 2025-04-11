import { useState } from 'react';
import { 
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material';
import { 
  Search as SearchIcon,
  Add as AddIcon,
  ArrowForward as ArrowForwardIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Fastfood as FastfoodIcon,
  LocalCafe as LocalCafeIcon,
  LocalDining as LocalDiningIcon,
  Edit as EditIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { foodItems } from '../data/mockData';

interface LogFoodProps {
  onAddFood: (meal: string) => void;
}

export default function LogFood({ onAddFood }: LogFoodProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [recentlyAdded, setRecentlyAdded] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  
  const handleAddFood = (mealType: string) => {
    onAddFood(mealType.toLowerCase());
  };
  
  const handleQuickAdd = (foodId: string) => {
    setIsLoading(true);
    // Simulate adding food
    setTimeout(() => {
      setRecentlyAdded([...recentlyAdded, foodId]);
      setIsLoading(false);
    }, 500);
  };
  
  const filteredFoodItems = foodItems.filter(
    item => item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const getMealIcon = (mealType: string) => {
    switch(mealType.toLowerCase()) {
      case 'breakfast': return <LocalCafeIcon />;
      case 'lunch': return <RestaurantMenuIcon />;
      case 'dinner': return <LocalDiningIcon />;
      case 'snacks': return <FastfoodIcon />;
      default: return <LocalDiningIcon />;
    }
  };
  
  return (
    <Box sx={{ pb: 6 }}>
      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="medium">
          Log Food
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search for a food to log..."
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: { borderRadius: 2, bgcolor: 'grey.50' }
            }}
          />
        </Box>
        
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          {mealTypes.map((meal, index) => (
            <Tab 
              key={index} 
              label={meal} 
              icon={getMealIcon(meal)} 
              iconPosition="start"
              sx={{ 
                textTransform: 'none',
                fontWeight: 'medium'
              }} 
            />
          ))}
        </Tabs>
        
        <Button
          variant="contained"
          fullWidth
          startIcon={<AddIcon />}
          onClick={() => handleAddFood(mealTypes[selectedTab])}
          sx={{ py: 1.5, borderRadius: 2 }}
        >
          Add Food to {mealTypes[selectedTab]}
        </Button>
      </Paper>
      
      <Grid container spacing={3}>
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Card sx={{ borderRadius: 2, mb: { xs: 3, md: 0 } }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mb: 2 
              }}>
                <Typography variant="h6" component="h2" fontWeight="medium">
                  Recent Foods
                </Typography>
                <Button 
                  size="small" 
                  endIcon={<ArrowForwardIcon fontSize="small" />}
                >
                  View All
                </Button>
              </Box>
              
              <List sx={{ 
                bgcolor: 'grey.50', 
                borderRadius: 2, 
                mb: 2,
                overflow: 'hidden' 
              }}>
                {filteredFoodItems.slice(0, 5).map((item, index) => (
                  <Box key={item.id}>
                    <ListItem 
                      sx={{ 
                        py: 1.5, 
                        px: 2, 
                        '&:hover': { bgcolor: 'grey.100' } 
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.light' }}>
                          <RestaurantMenuIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={item.name}
                        secondary={`${item.serving} • ${item.calories} cal`}
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                      />
                      <ListItemSecondaryAction>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleQuickAdd(item.id)}
                          disabled={recentlyAdded.includes(item.id) || isLoading}
                          sx={{ 
                            borderRadius: 1,
                            minWidth: 80
                          }}
                        >
                          {recentlyAdded.includes(item.id) ? 'Added' : 'Add'}
                          {isLoading && item.id === recentlyAdded[recentlyAdded.length - 1] && 
                            <CircularProgress size={16} sx={{ ml: 1 }} />
                          }
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < filteredFoodItems.slice(0, 5).length - 1 && <Divider component="li" />}
                  </Box>
                ))}
                
                {filteredFoodItems.length === 0 && (
                  <ListItem sx={{ py: 4 }}>
                    <ListItemText 
                      primary="No foods found"
                      secondary="Try a different search term"
                      primaryTypographyProps={{ align: 'center' }}
                      secondaryTypographyProps={{ align: 'center' }}
                    />
                  </ListItem>
                )}
              </List>
              
              <Button 
                variant="outlined" 
                fullWidth
                startIcon={<AddIcon />}
                sx={{ 
                  py: 1, 
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              >
                Create New Food
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mb: 2 
              }}>
                <Typography variant="h6" component="h2" fontWeight="medium">
                  Today's Log • {mealTypes[selectedTab]}
                </Typography>
                <IconButton size="small" color="primary">
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
              
              <List sx={{ 
                bgcolor: 'grey.50', 
                borderRadius: 2,
                overflow: 'hidden',
                mb: recentlyAdded.length > 0 ? 2 : 0
              }}>
                {recentlyAdded.length > 0 ? (
                  filteredFoodItems
                    .filter(item => recentlyAdded.includes(item.id))
                    .map((item, index, array) => (
                      <Box key={item.id}>
                        <ListItem 
                          sx={{ 
                            py: 1.5, 
                            px: 2, 
                            '&:hover': { bgcolor: 'grey.100' } 
                          }}
                        >
                          <ListItemText 
                            primary={item.name}
                            secondary={`${item.serving} • ${item.calories} cal`}
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" size="small">
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                        {index < array.length - 1 && <Divider component="li" />}
                      </Box>
                    ))
                ) : (
                  <ListItem sx={{ py: 4 }}>
                    <ListItemText 
                      primary="No foods logged"
                      secondary={`Click "Add Food to ${mealTypes[selectedTab]}" to start logging`}
                      primaryTypographyProps={{ align: 'center' }}
                      secondaryTypographyProps={{ align: 'center' }}
                    />
                  </ListItem>
                )}
              </List>
              
              {recentlyAdded.length > 0 && (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  p: 2,
                  bgcolor: 'primary.50',
                  borderRadius: 2
                }}>
                  <Typography variant="body1" fontWeight="medium">
                    Total
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {filteredFoodItems
                      .filter(item => recentlyAdded.includes(item.id))
                      .reduce((sum, item) => sum + item.calories, 0)} cal
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
