import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Avatar,
  Grid,
  Paper
} from '@mui/material';
import { 
  Edit as EditIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { UserProfile as UserProfileType } from '../../types';

interface UserProfileProps {
  user: UserProfileType;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 3 
        }}>
          <Avatar 
            sx={{ 
              width: 48, 
              height: 48, 
              bgcolor: 'grey.200',
              color: 'text.secondary',
              mr: 2
            }}
          >
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="medium">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.goal}
            </Typography>
          </Box>
        </Box>
        
        <Grid container spacing={1} sx={{ mb: 3 }}>
          <Grid item xs={4}>
            <Paper 
              elevation={0}
              sx={{ 
                bgcolor: 'grey.50', 
                p: 1.5,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Target
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {user.target}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                cal/day
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4}>
            <Paper 
              elevation={0}
              sx={{ 
                bgcolor: 'grey.50', 
                p: 1.5,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Weight
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {user.weight}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                current
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={4}>
            <Paper 
              elevation={0}
              sx={{ 
                bgcolor: 'grey.50', 
                p: 1.5,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Goal
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {user.goalWeight}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                target
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        
        <Button 
          variant="text" 
          fullWidth
          startIcon={<EditIcon />}
          sx={{ 
            py: 1, 
            color: 'text.secondary', 
            '&:hover': {
              bgcolor: 'grey.100'
            }
          }}
        >
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}
