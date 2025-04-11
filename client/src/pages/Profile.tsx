import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid,
  Card, 
  CardContent,
  Avatar,
  Button,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Divider,
  InputAdornment,
  MenuItem,
  Tab,
  Tabs
} from '@mui/material';
import { 
  Person as PersonIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';
import { userProfile } from '../data/mockData';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: userProfile.name,
    goal: userProfile.goal,
    target: userProfile.target.toString(),
    weight: userProfile.weight.replace('lbs', '').trim(),
    goalWeight: userProfile.goalWeight.replace('lbs', '').trim(),
    email: 'user@example.com',
    password: '••••••••',
    height: '5\'10"',
    gender: 'Male',
    birthdate: '1990-01-01',
    activity: 'Moderate'
  });
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const activityLevels = [
    'Sedentary',
    'Lightly Active',
    'Moderate',
    'Very Active',
    'Extra Active'
  ];
  
  const dietaryPreferences = [
    { id: 1, name: 'Vegetarian', selected: false },
    { id: 2, name: 'Vegan', selected: false },
    { id: 3, name: 'Gluten-Free', selected: true },
    { id: 4, name: 'Dairy-Free', selected: false },
    { id: 5, name: 'Keto', selected: false },
    { id: 6, name: 'Paleo', selected: false }
  ];
  
  const notificationSettings = [
    { id: 1, name: 'Daily Reminders', description: 'Remind me to log my meals', enabled: true },
    { id: 2, name: 'Weekly Reports', description: 'Send me weekly nutrition reports', enabled: true },
    { id: 3, name: 'Achievement Alerts', description: 'Notify me about new achievements', enabled: false },
    { id: 4, name: 'Recipe Recommendations', description: 'Get personalized recipe ideas', enabled: true }
  ];
  
  return (
    <Box sx={{ pb: 6 }}>
      <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="medium">
          My Profile
        </Typography>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="profile tabs"
          >
            <Tab 
              label="Personal Info" 
              icon={<PersonIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Health Details" 
              icon={<HealthAndSafetyIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Food Preferences" 
              icon={<RestaurantMenuIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
            <Tab 
              label="Settings" 
              icon={<SettingsIcon />}
              iconPosition="start"
              sx={{ textTransform: 'none', fontWeight: 'medium' }}
            />
          </Tabs>
        </Box>
      </Paper>
      
      {activeTab === 0 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3
            }}>
              <Typography variant="h6" component="h2" fontWeight="medium">
                Personal Information
              </Typography>
              
              {isEditing ? (
                <Button 
                  variant="contained" 
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  color="primary"
                >
                  Save
                </Button>
              ) : (
                <Button 
                  variant="outlined" 
                  startIcon={<EditIcon />}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </Box>
            
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 96, 
                    height: 96, 
                    mx: 'auto',
                    bgcolor: 'primary.main',
                    fontSize: '2rem'
                  }}
                >
                  {formData.name.charAt(0)}
                </Avatar>
                
                {isEditing && (
                  <Button 
                    size="small" 
                    sx={{ mt: 2 }}
                  >
                    Change Photo
                  </Button>
                )}
              </Grid>
              
              <Grid item xs={12} md={9}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                      InputProps={{
                        endAdornment: isEditing && (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Gender"
                      name="gender"
                      select
                      value={formData.gender}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                      <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                    </TextField>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Height"
                      name="height"
                      value={formData.height}
                      onChange={handleFormChange}
                      fullWidth
                      variant="outlined"
                      disabled={!isEditing}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      
      {activeTab === 1 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3
            }}>
              <Typography variant="h6" component="h2" fontWeight="medium">
                Health & Fitness Goals
              </Typography>
              
              {isEditing ? (
                <Button 
                  variant="contained" 
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  color="primary"
                >
                  Save
                </Button>
              ) : (
                <Button 
                  variant="outlined" 
                  startIcon={<EditIcon />}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </Box>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Goal"
                  name="goal"
                  select
                  value={formData.goal}
                  onChange={handleFormChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditing}
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="Weight Loss">Weight Loss</MenuItem>
                  <MenuItem value="Maintain Weight">Maintain Weight</MenuItem>
                  <MenuItem value="Gain Weight">Gain Weight</MenuItem>
                  <MenuItem value="Build Muscle">Build Muscle</MenuItem>
                  <MenuItem value="Improve Health">Improve Health</MenuItem>
                </TextField>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  label="Activity Level"
                  name="activity"
                  select
                  value={formData.activity}
                  onChange={handleFormChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditing}
                  sx={{ mb: 2 }}
                >
                  {activityLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  label="Current Weight (lbs)"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleFormChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditing}
                  sx={{ mb: 2 }}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  label="Goal Weight (lbs)"
                  name="goalWeight"
                  type="number"
                  value={formData.goalWeight}
                  onChange={handleFormChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditing}
                  sx={{ mb: 2 }}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  label="Daily Calorie Target"
                  name="target"
                  type="number"
                  value={formData.target}
                  onChange={handleFormChange}
                  fullWidth
                  variant="outlined"
                  disabled={!isEditing}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      
      {activeTab === 2 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
              Dietary Preferences
            </Typography>
            
            <List sx={{ bgcolor: 'grey.50', borderRadius: 2, mb: 3 }}>
              {dietaryPreferences.map((preference) => (
                <Box key={preference.id}>
                  <ListItem>
                    <ListItemIcon>
                      <Switch 
                        edge="start"
                        checked={preference.selected}
                        disabled={!isEditing}
                      />
                    </ListItemIcon>
                    <ListItemText primary={preference.name} />
                  </ListItem>
                  {preference.id < dietaryPreferences.length && <Divider component="li" />}
                </Box>
              ))}
            </List>
            
            <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
              Food Allergies & Restrictions
            </Typography>
            
            <TextField
              placeholder="Add allergies or food restrictions"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
              disabled={!isEditing}
              sx={{ mb: 3 }}
            />
            
            <Button 
              variant="contained" 
              fullWidth
              disabled={!isEditing}
              sx={{ borderRadius: 1 }}
            >
              Save Preferences
            </Button>
          </CardContent>
        </Card>
      )}
      
      {activeTab === 3 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
              Notifications
            </Typography>
            
            <List sx={{ bgcolor: 'grey.50', borderRadius: 2, mb: 3 }}>
              {notificationSettings.map((notification) => (
                <Box key={notification.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText 
                      primary={notification.name} 
                      secondary={notification.description}
                    />
                    <Switch 
                      checked={notification.enabled}
                      edge="end"
                    />
                  </ListItem>
                  {notification.id < notificationSettings.length && <Divider component="li" />}
                </Box>
              ))}
            </List>
            
            <Typography variant="h6" component="h2" gutterBottom fontWeight="medium">
              Account Settings
            </Typography>
            
            <List sx={{ bgcolor: 'grey.50', borderRadius: 2 }}>
              <ListItem button sx={{ py: 2 }}>
                <ListItemIcon>
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy & Security" />
                <KeyboardArrowRightIcon color="action" />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem button sx={{ py: 2 }}>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help & Support" />
                <KeyboardArrowRightIcon color="action" />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem button sx={{ py: 2 }}>
                <ListItemIcon>
                  <LogoutIcon color="error" />
                </ListItemIcon>
                <ListItemText 
                  primary="Logout" 
                  primaryTypographyProps={{ color: 'error' }}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
