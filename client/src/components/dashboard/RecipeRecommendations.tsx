import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid,
  CardMedia,
  CardActions,
  Chip,
  IconButton
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@mui/icons-material';
import { Recipe } from '../../types';
import { useLocation } from 'wouter';

interface RecipeRecommendationsProps {
  recommendations: Recipe[];
}

export default function RecipeRecommendations({ recommendations }: RecipeRecommendationsProps) {
  const [, setLocation] = useLocation();
  
  const getTagColor = (color: string) => {
    switch(color) {
      case 'green': return { bgcolor: 'success.100', color: 'success.800' };
      case 'blue': return { bgcolor: 'info.100', color: 'info.800' };
      default: return { bgcolor: 'primary.100', color: 'primary.800' };
    }
  };
  
  return (
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}>
          <Typography variant="h6" component="h2" fontWeight="medium">
            Recipe Recommendations
          </Typography>
          
          <Button 
            size="small" 
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            onClick={() => setLocation('/recipes')}
          >
            See All
          </Button>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Based on your nutritional goals and available ingredients
        </Typography>
        
        <Grid container spacing={2}>
          {recommendations.map((recipe) => (
            <Grid item xs={12} sm={6} key={recipe.id}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  bgcolor: 'grey.50',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: 3
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="160"
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
                        color: 'error.main'
                      }
                    }}
                    size="small"
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                </Box>
                
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    mb: 1
                  }}>
                    <Typography variant="body1" fontWeight="medium">
                      {recipe.name}
                    </Typography>
                    <Chip 
                      label={recipe.tag}
                      size="small"
                      sx={{ 
                        ...getTagColor(recipe.tagColor),
                        height: 24,
                        fontSize: '0.7rem',
                        fontWeight: 500
                      }}
                    />
                  </Box>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    Uses {recipe.ingredientsMatched} ingredients you have
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    typography: 'caption'
                  }}>
                    <span>{recipe.calories} cal</span>
                    <span>P: {recipe.protein}g • C: {recipe.carbs}g • F: {recipe.fat}g</span>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Button 
          variant="outlined" 
          fullWidth 
          startIcon={<SearchIcon />}
          onClick={() => setLocation('/recipes')}
          sx={{ 
            mt: 3, 
            borderRadius: 1,
            py: 1,
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white'
            }
          }}
        >
          Find More Recipes
        </Button>
      </CardContent>
    </Card>
  );
}
