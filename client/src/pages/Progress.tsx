import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  ButtonGroup,
  Tabs,
  Tab,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar
} from '@mui/material';
import { 
  CalendarToday as CalendarTodayIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as EmojiEventsIcon,
  ArrowUpward as ArrowUpwardIcon, 
  ArrowDownward as ArrowDownwardIcon,
  FiberManualRecord as FiberManualRecordIcon
} from '@mui/icons-material';
import { dailyData, nutritionData } from '../data/mockData';

export default function Progress() {
  const [timeRange, setTimeRange] = useState(1); // 0: week, 1: month, 2: year
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTimeRangeChange = (newRange: number) => {
    setTimeRange(newRange);
  };
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  // Mock weight progress data
  const weightData = {
    current: 162,
    goal: 150,
    change: -3.2,
    progress: 70,
    history: [
      { date: 'Mar 15', weight: 165.2 },
      { date: 'Mar 22', weight: 164.5 },
      { date: 'Mar 29', weight: 163.1 },
      { date: 'Apr 5', weight: 162.0 }
    ]
  };
  
  // Mock activity data
  const activityData = [
    { day: 'Monday', steps: 8432, calories: 320 },
    { day: 'Tuesday', steps: 10251, calories: 410 },
    { day: 'Wednesday', steps: 7863, calories: 290 },
    { day: 'Thursday', steps: 9145, calories: 365 },
    { day: 'Friday', steps: 11023, calories: 445 },
    { day: 'Saturday', steps: 5231, calories: 210 },
    { day: 'Sunday', steps: 6892, calories: 275 }
  ];
  
  // Mock achievements
  const achievements = [
    { id: 1, title: 'Perfect Week', description: 'Logged all meals for 7 days in a row', completed: true },
    { id: 2, title: 'Protein Champion', description: 'Met protein goal for 5 consecutive days', completed: true },
    { id: 3, title: 'Weight Milestone', description: 'Lost 5 pounds from starting weight', completed: false },
    { id: 4, title: 'Hydration Hero', description: 'Logged water intake for 10 days straight', completed: false }
  ];
  
  return (
    <Box sx={{ pb: 6 }}>
      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="medium">
          Progress & Analytics
        </Typography>
        
        <ButtonGroup 
          variant="outlined" 
          sx={{ mb: 3 }}
          aria-label="time range selection"
        >
          <Button 
            onClick={() => handleTimeRangeChange(0)}
            variant={timeRange === 0 ? 'contained' : 'outlined'}
          >
            Week
          </Button>
          <Button 
            onClick={() => handleTimeRangeChange(1)}
            variant={timeRange === 1 ? 'contained' : 'outlined'}
          >
            Month
          </Button>
          <Button 
            onClick={() => handleTimeRangeChange(2)}
            variant={timeRange === 2 ? 'contained' : 'outlined'}
          >
            Year
          </Button>
        </ButtonGroup>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="progress tracking tabs"
          >
            <Tab 
              label="Overview" 
              icon={<TrendingUpIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Weight" 
              icon={<CalendarTodayIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Activity" 
              icon={<TrendingUpIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Achievements" 
              icon={<EmojiEventsIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
          </Tabs>
        </Box>
      </Paper>
      
      {activeTab === 0 && (
        <Grid container spacing={3}>
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Card sx={{ borderRadius: 2, mb: { xs: 0, md: 3 } }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
                  Nutrition Summary
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Calories</Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {dailyData.calories.consumed} / {dailyData.calories.goal} kcal
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(dailyData.calories.consumed / dailyData.calories.goal) * 100}
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Protein</Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {dailyData.protein.consumed}g / {dailyData.protein.goal}g
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(dailyData.protein.consumed / dailyData.protein.goal) * 100}
                    sx={{ height: 8, borderRadius: 4, mb: 2, '& .MuiLinearProgress-bar': { bgcolor: 'success.main' } }}
                  />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Carbs</Typography>
                    <Typography variant="body2" fontWeight="medium">
                      {dailyData.carbs.consumed}g / {dailyData.carbs.goal}g
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(dailyData.carbs.consumed / dailyData.carbs.goal) * 100}
                    sx={{ height: 8, borderRadius: 4, '& .MuiLinearProgress-bar': { bgcolor: 'info.main' } }}
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  Weekly Protein Distribution
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  height: 100,
                  mt: 2
                }}>
                  {nutritionData.weeklyProtein.map((value, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: '12%',
                        height: `${value}%`,
                        bgcolor: index === 6 ? 'primary.main' : 'primary.light',
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  mt: 1 
                }}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <Typography key={index} variant="caption" color="text.secondary">
                      {day}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Card sx={{ borderRadius: 2, mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
                  Weight Tracking
                </Typography>
                
                <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Current
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                      {weightData.current} <Typography component="span" variant="body1">lbs</Typography>
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: weightData.change < 0 ? 'success.50' : 'error.50',
                    color: weightData.change < 0 ? 'success.main' : 'error.main',
                    py: 0.5,
                    px: 1.5,
                    borderRadius: 2
                  }}>
                    {weightData.change < 0 ? 
                      <ArrowDownwardIcon fontSize="small" sx={{ mr: 0.5 }} /> : 
                      <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.5 }} />
                    }
                    <Typography variant="body2" fontWeight="medium">
                      {Math.abs(weightData.change)} lbs
                    </Typography>
                  </Box>
                  
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" color="text.secondary">
                      Goal
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                      {weightData.goal} <Typography component="span" variant="body1">lbs</Typography>
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 2, mb: 3 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={weightData.progress}
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      '& .MuiLinearProgress-bar': { bgcolor: 'success.main' }
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {weightData.progress}% to goal
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom>
                  Recent Weigh-ins
                </Typography>
                
                <Box sx={{ bgcolor: 'grey.50', borderRadius: 2, overflow: 'hidden' }}>
                  <List disablePadding>
                    {weightData.history.map((entry, index) => (
                      <Box key={index}>
                        <ListItem sx={{ py: 1.5 }}>
                          <ListItemText
                            primary={entry.date}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                          <Typography variant="body2" fontWeight="medium">
                            {entry.weight} lbs
                          </Typography>
                        </ListItem>
                        {index < weightData.history.length - 1 && <Divider component="li" />}
                      </Box>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid sx={{ gridColumn: 'span 12' }}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
                  Activity Summary
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      height: 150,
                      mt: 2,
                      mb: 1
                    }}>
                      {activityData.map((day, index) => (
                        <Box key={index} sx={{ width: '13%', textAlign: 'center' }}>
                          <Box
                            sx={{
                              height: `${(day.steps / 12000) * 100}%`,
                              bgcolor: day.steps > 10000 ? 'success.main' : 'primary.main',
                              width: '100%',
                              borderTopLeftRadius: 4,
                              borderTopRightRadius: 4,
                              minHeight: 10
                            }}
                          />
                          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                            {day.day.substring(0, 1)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1
                    }}>
                      <Typography variant="subtitle2">Daily Steps</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Average: 8,405
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
                    <List disablePadding sx={{ bgcolor: 'grey.50', borderRadius: 2, overflow: 'hidden' }}>
                      {activityData.map((day, index) => (
                        <Box key={index}>
                          <ListItem sx={{ py: 1.5 }}>
                            <Avatar 
                              sx={{ 
                                width: 36, 
                                height: 36, 
                                mr: 2,
                                bgcolor: day.steps > 10000 ? 'success.light' : 'primary.light'
                              }}
                            >
                              {day.day.substring(0, 1)}
                            </Avatar>
                            <ListItemText
                              primary={day.day}
                              secondary={`${day.steps.toLocaleString()} steps`}
                              primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }}
                              secondaryTypographyProps={{ variant: 'body2' }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {day.calories} cal
                            </Typography>
                          </ListItem>
                          {index < activityData.length - 1 && <Divider component="li" />}
                        </Box>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
      
      {activeTab === 1 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Weight Details
            </Typography>
            <Typography variant="body1">
              More detailed weight tracking coming soon.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {activeTab === 2 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Activity Details
            </Typography>
            <Typography variant="body1">
              More detailed activity tracking coming soon.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      {activeTab === 3 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
              Your Achievements
            </Typography>
            
            <List sx={{ bgcolor: 'grey.50', borderRadius: 2, overflow: 'hidden' }}>
              {achievements.map((achievement, index) => (
                <Box key={achievement.id}>
                  <ListItem 
                    sx={{ 
                      py: 2,
                      opacity: achievement.completed ? 1 : 0.7 
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        bgcolor: achievement.completed ? 'success.main' : 'grey.300',
                        color: 'white',
                        mr: 2
                      }}
                    >
                      {achievement.completed ? <EmojiEventsIcon /> : index + 1}
                    </Avatar>
                    <ListItemText
                      primary={achievement.title}
                      secondary={achievement.description}
                      primaryTypographyProps={{ 
                        fontWeight: 'medium',
                        sx: { 
                          display: 'flex', 
                          alignItems: 'center'
                        }
                      }}
                    />
                    {achievement.completed && (
                      <Typography variant="body2" sx={{ color: 'success.main', display: 'flex', alignItems: 'center' }}>
                        <FiberManualRecordIcon sx={{ fontSize: 10, mr: 0.5 }} />
                        Completed
                      </Typography>
                    )}
                  </ListItem>
                  {index < achievements.length - 1 && <Divider component="li" />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
