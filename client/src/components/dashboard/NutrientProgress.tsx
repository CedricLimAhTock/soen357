import { Box, Typography, LinearProgress } from '@mui/material';
import { NutrientData } from '../../types';

interface NutrientProgressProps {
  title: string;
  data: NutrientData;
  color?: string;
}

export default function NutrientProgress({ 
  title, 
  data, 
  color = 'primary.main' 
}: NutrientProgressProps) {
  const progressPercent = (data.consumed / data.goal) * 100;
  
  return (
    <Box sx={{ 
      bgcolor: 'grey.50', 
      borderRadius: 2, 
      p: 2 
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 1 
      }}>
        <Typography variant="body2" color="text.secondary" fontWeight="medium">
          {title}
        </Typography>
        <Typography variant="body2" fontWeight="medium">
          {data.remaining} remaining
        </Typography>
      </Box>
      
      <LinearProgress
        variant="determinate"
        value={Math.min(progressPercent, 100)}
        sx={{
          borderRadius: 5,
          height: 4,
          mb: 1,
          bgcolor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            bgcolor: color,
            borderRadius: 5,
          },
        }}
      />
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between' 
      }}>
        <Typography variant="caption" color="text.secondary">
          {data.consumed.toLocaleString()}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {data.goal.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}
