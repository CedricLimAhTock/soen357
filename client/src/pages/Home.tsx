import { Grid } from '@mui/material';
import DailyOverview from '../components/dashboard/DailyOverview';
import RecipeRecommendations from '../components/dashboard/RecipeRecommendations';
import UserProfile from '../components/sidebar/UserProfile';
import IngredientInventory from '../components/sidebar/IngredientInventory';
import NutritionInsights from '../components/sidebar/NutritionInsights';
import { dailyData, recipeRecommendations, userProfile, ingredients, nutritionData } from '../data/mockData';

interface HomeProps {
  onAddFood: (meal: string) => void;
}

export default function Home({ onAddFood }: HomeProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <DailyOverview 
          dailyData={dailyData} 
          onAddFood={onAddFood} 
        />
        <RecipeRecommendations 
          recommendations={recipeRecommendations} 
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <UserProfile 
          user={userProfile} 
        />
        <IngredientInventory 
          ingredients={ingredients} 
        />
        <NutritionInsights 
          data={nutritionData} 
        />
      </Grid>
    </Grid>
  );
}
