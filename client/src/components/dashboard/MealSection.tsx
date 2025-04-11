import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Avatar,
  Grid
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { MealData } from '../../types';
import Icon from '@mui/material/Icon';

interface MealSectionProps {
  title: string;
  mealData: MealData;
  onAddFood: () => void;
}

export default function MealSection({ title, mealData, onAddFood }: MealSectionProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 1 
      }}>
        <Typography variant="body1" fontWeight="medium">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mealData.calories} cal
        </Typography>
      </Box>
      
      {mealData.items.map((item) => (
        <Card 
          key={item.id} 
          sx={{ 
            mb: 1, 
            bgcolor: 'grey.50', 
            boxShadow: 'none', 
            borderRadius: 2 
          }}
        >
          <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Avatar 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    bgcolor: 'grey.200',
                    color: 'text.secondary'
                  }}
                >
                  <Icon>{item.icon}</Icon>
                </Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" fontWeight="medium">
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.serving}
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" fontWeight="medium">
                    {item.calories} cal
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    P: {item.protein}g • C: {item.carbs}g • F: {item.fat}g
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        variant="text" 
        fullWidth
        startIcon={<AddIcon />}
        onClick={onAddFood}
        sx={{ 
          py: 1, 
          mt: 1,
          color: 'primary.main', 
          fontSize: '0.875rem',
          '&:hover': {
            bgcolor: 'grey.100'
          }
        }}
      >
        Add Food
      </Button>
    </Box>
  );
}
