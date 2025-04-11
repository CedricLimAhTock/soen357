import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Paper
} from '@mui/material';
import { NutritionData } from '../../types';

interface NutritionInsightsProps {
  data: NutritionData;
}

export default function NutritionInsights({ data }: NutritionInsightsProps) {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" fontWeight="medium" sx={{ mb: 3 }}>
          Nutrition Insights
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Weekly Protein Intake
          </Typography>
          
          <Paper
            elevation={0}
            sx={{ 
              bgcolor: 'grey.50', 
              p: 2,
              borderRadius: 2,
              height: 128,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between'
            }}
          >
            {data.weeklyProtein.map((value, index) => (
              <Box
                key={index}
                sx={{
                  width: 32,
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  bgcolor: index === 6 ? 'primary.main' : 'primary.light',
                  height: `${(value / 100) * 100}%`
                }}
              />
            ))}
          </Paper>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mt: 1 
          }}>
            {daysOfWeek.map((day, index) => (
              <Typography key={index} variant="caption" color="text.secondary">
                {day}
              </Typography>
            ))}
          </Box>
        </Box>
        
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Nutritional Balance
          </Typography>
          
          <Paper
            elevation={0}
            sx={{ 
              bgcolor: 'grey.50', 
              p: 2,
              borderRadius: 2,
              height: 176,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}
          >
            <Box 
              sx={{
                width: 128,
                height: 128,
                borderRadius: '50%',
                position: 'relative',
                background: `conic-gradient(
                  #1976d2 0% ${data.balance.protein}%, 
                  #42a5f5 ${data.balance.protein}% ${data.balance.protein + data.balance.carbs}%, 
                  #f50057 ${data.balance.protein + data.balance.carbs}% 100%
                )`
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'grey.50',
                }}
              />
            </Box>
          </Paper>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.main',
                  mr: 0.5
                }} 
              />
              <Typography variant="caption">
                Protein {data.balance.protein}%
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.light',
                  mr: 0.5
                }} 
              />
              <Typography variant="caption">
                Carbs {data.balance.carbs}%
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: '50%', 
                  bgcolor: 'secondary.main',
                  mr: 0.5
                }} 
              />
              <Typography variant="caption">
                Fat {data.balance.fat}%
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
