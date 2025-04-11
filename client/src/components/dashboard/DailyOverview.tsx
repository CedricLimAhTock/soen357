import { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Grid,
  IconButton
} from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon 
} from '@mui/icons-material';
import NutrientProgress from './NutrientProgress';
import MealSection from './MealSection';
import { DailyData } from '../../types';

interface DailyOverviewProps {
  dailyData: DailyData;
  onAddFood: (meal: string) => void;
}

export default function DailyOverview({ dailyData, onAddFood }: DailyOverviewProps) {
  const [currentDate, setCurrentDate] = useState(dailyData.date);
  
  return (
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3 
        }}>
          <Typography variant="h6" component="h2" fontWeight="medium">
            Daily Overview
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              size="small" 
              startIcon={<ChevronLeftIcon fontSize="small" />}
              sx={{ color: 'primary.main', minWidth: 'auto' }}
            >
              Previous
            </Button>
            
            <Typography variant="body2" fontWeight="medium" sx={{ mx: 2 }}>
              {currentDate}
            </Typography>
            
            <Button 
              size="small" 
              endIcon={<ChevronRightIcon fontSize="small" />}
              sx={{ color: 'primary.main', minWidth: 'auto' }}
            >
              Next
            </Button>
          </Box>
        </Box>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <NutrientProgress 
              title="Calories" 
              data={dailyData.calories} 
              color="primary.main"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <NutrientProgress 
              title="Protein" 
              data={dailyData.protein} 
              color="success.main"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <NutrientProgress 
              title="Carbs" 
              data={dailyData.carbs} 
              color="info.main"
            />
          </Grid>
        </Grid>
        
        <MealSection 
          title="Breakfast" 
          mealData={dailyData.breakfast} 
          onAddFood={() => onAddFood('breakfast')}
        />
        
        <MealSection 
          title="Lunch" 
          mealData={dailyData.lunch} 
          onAddFood={() => onAddFood('lunch')}
        />
        
        <MealSection 
          title="Dinner" 
          mealData={dailyData.dinner} 
          onAddFood={() => onAddFood('dinner')}
        />
        
        <MealSection 
          title="Snacks" 
          mealData={dailyData.snacks} 
          onAddFood={() => onAddFood('snacks')}
        />
      </CardContent>
    </Card>
  );
}
