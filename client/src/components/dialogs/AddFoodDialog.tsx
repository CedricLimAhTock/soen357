import { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  IconButton,
  Button,
  InputBase,
  Box,
  Typography,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { 
  Close as CloseIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { foodItems } from '../../data/mockData';

interface AddFoodDialogProps {
  open: boolean;
  onClose: () => void;
  meal: string | null;
}

export default function AddFoodDialog({ open, onClose, meal }: AddFoodDialogProps) {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('Recent');
  
  const categories = ['Recent', 'My Foods', 'Recipes', 'Meals', 'Restaurants'];
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          maxHeight: '90vh'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: 1,
        borderColor: 'divider',
        pb: 2
      }}>
        <Typography variant="h6" component="h2">
          Add Food {meal ? `to ${meal}` : ''}
        </Typography>
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 3 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 1,
            mb: 2, 
            border: 1,
            borderColor: 'grey.200',
            borderRadius: 2,
            bgcolor: 'grey.50'
          }}
        >
          <SearchIcon color="action" sx={{ mr: 1, fontSize: '1.2rem' }} />
          <InputBase
            placeholder="Search for a food..."
            fullWidth
            value={searchValue}
            onChange={handleSearch}
            sx={{ fontSize: '0.875rem' }}
          />
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, 
            mb: 2,
            overflowX: 'auto',
            py: 0.5,
            '&::-webkit-scrollbar': {
              height: 4,
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(0,0,0,0.1)',
              borderRadius: 2,
            },
          }}
        >
          {categories.map((category) => (
            <Chip 
              key={category}
              label={category}
              onClick={() => handleCategoryClick(category)}
              color={activeCategory === category ? 'primary' : 'default'}
              variant={activeCategory === category ? 'filled' : 'outlined'}
              sx={{ px: 1 }}
            />
          ))}
        </Box>
        
        <Box 
          sx={{ 
            border: 1, 
            borderColor: 'grey.200', 
            borderRadius: 2,
            maxHeight: 240,
            overflow: 'auto',
            mb: 2
          }}
        >
          <List disablePadding>
            {foodItems.map((item, index) => (
              <>
                <ListItem 
                  key={item.id}
                  button
                  sx={{ 
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'grey.50'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.name}
                    secondary={item.serving}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                  <Typography variant="body2">
                    {item.calories} cal
                  </Typography>
                </ListItem>
                {index < foodItems.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button 
          onClick={onClose}
          variant="outlined"
          color="inherit"
          sx={{ borderColor: 'grey.300', color: 'text.primary' }}
        >
          Cancel
        </Button>
        <Button 
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ ml: 1 }}
        >
          Add to Meal
        </Button>
      </DialogActions>
    </Dialog>
  );
}
