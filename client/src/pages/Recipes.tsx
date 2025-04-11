import { useState } from 'react';
import { 
  Box, 
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import { 
  Search as SearchIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  FilterList as FilterListIcon,
  Timer as TimerIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';
import { recipeRecommendations as mockRecipes } from '../data/mockData';

export default function Recipes() {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const tabs = ["All Recipes", "Favorites", "My Recipes", "Recent"];
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  // Add more mock recipes by duplicating and modifying the existing ones
  const allRecipes = [
    ...mockRecipes,
    {
      ...mockRecipes[0],
      id: "recipe-5",
      name: "Vegetable Stir Fry",
      tag: "Vegan",
      tagColor: "green"
    },
    {
      ...mockRecipes[1],
      id: "recipe-6",
      name: "Quinoa Salad",
      tag: "Low-Carb",
      tagColor: "blue"
    },
    {
      ...mockRecipes[0],
      id: "recipe-7",
      name: "Greek Yogurt Bowl",
      tag: "High-Protein",
      tagColor: "green"
    },
    {
      ...mockRecipes[1],
      id: "recipe-8",
      name: "Chicken Curry",
      tag: "High-Protein",
      tagColor: "blue"
    }
  ];
  
  const filteredRecipes = allRecipes.filter(
    recipe => recipe.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const displayRecipes = activeTab === 1 
    ? filteredRecipes.filter(recipe => favorites.includes(recipe.id))
    : filteredRecipes;
  
  return (
    <Box sx={{ pb: 6 }}>
      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="medium">
          Recipes
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder="Search recipes..."
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <FilterListIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { borderRadius: 2, bgcolor: 'grey.50' }
            }}
          />
        </Box>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map((tab, index) => (
              <Tab 
                key={index} 
                label={tab} 
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 'medium',
                  minWidth: 100
                }} 
              />
            ))}
          </Tabs>
        </Box>
      </Paper>
      
      <Grid container spacing={2}>
        {displayRecipes.map((recipe) => (
          <Grid key={recipe.id} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 2,
                height: '100%',
                bgcolor: 'grey.50',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={recipe.imageUrl}
                  alt={recipe.name}
                />
                <IconButton
                  sx={{ 
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'white',
                    boxShadow: 1,
                    '&:hover': {
                      bgcolor: 'white',
                    }
                  }}
                  size="small"
                  onClick={() => toggleFavorite(recipe.id)}
                >
                  {favorites.includes(recipe.id) ? 
                    <FavoriteIcon fontSize="small" color="error" /> : 
                    <FavoriteBorderIcon fontSize="small" />
                  }
                </IconButton>
                <Chip 
                  label={recipe.tag}
                  size="small"
                  sx={{ 
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    bgcolor: recipe.tagColor === 'green' ? 'success.100' : 'info.100',
                    color: recipe.tagColor === 'green' ? 'success.800' : 'info.800',
                    fontWeight: 500
                  }}
                />
              </Box>
              
              <CardContent sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
                  {recipe.name}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <TimerIcon fontSize="small" sx={{ color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      25 min
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <RestaurantIcon fontSize="small" sx={{ color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      4 servings
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Uses {recipe.ingredientsMatched} ingredients you have
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  typography: 'caption',
                  color: 'text.secondary'
                }}>
                  <span>{recipe.calories} cal</span>
                  <span>P: {recipe.protein}g • C: {recipe.carbs}g • F: {recipe.fat}g</span>
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  View Recipe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {displayRecipes.length === 0 && (
        <Paper sx={{ p: 4, borderRadius: 2, textAlign: 'center', mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            No recipes found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
