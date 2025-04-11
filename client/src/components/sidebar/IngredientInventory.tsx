import { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  InputBase,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import { 
  Add as AddIcon,
  AddShoppingCart as AddShoppingCartIcon,
  Search as SearchIcon,
  Edit as EditIcon
} from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import { Ingredient } from '../../types';

interface IngredientInventoryProps {
  ingredients: Ingredient[];
}

export default function IngredientInventory({ ingredients }: IngredientInventoryProps) {
  const [searchValue, setSearchValue] = useState('');
  
  const filteredIngredients = ingredients.filter(ingredient => 
    ingredient.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
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
            My Ingredients
          </Typography>
          
          <IconButton size="small" color="primary">
            <AddIcon />
          </IconButton>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 1,
            mb: 3, 
            border: 1,
            borderColor: 'grey.200',
            borderRadius: 2,
            bgcolor: 'grey.50'
          }}
        >
          <SearchIcon color="action" sx={{ mr: 1, fontSize: '1.2rem' }} />
          <InputBase
            placeholder="Search ingredients..."
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{ fontSize: '0.875rem' }}
          />
        </Box>
        
        <Box 
          sx={{ 
            maxHeight: 320, 
            overflowY: 'auto', 
            pr: 1,
            mb: 3,
            '&::-webkit-scrollbar': {
              width: 4,
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
          <List disablePadding>
            {filteredIngredients.map((ingredient) => (
              <ListItem
                key={ingredient.id}
                disablePadding
                sx={{ 
                  mb: 1,
                  bgcolor: 'grey.50',
                  borderRadius: 2,
                  py: 0.5,
                  px: 1
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Icon sx={{ color: 'text.secondary' }}>
                    {ingredient.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText 
                  primary={ingredient.name}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
                <ListItemSecondaryAction sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                    {ingredient.quantity}
                  </Typography>
                  <IconButton edge="end" size="small" sx={{ color: 'text.disabled' }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
        
        <Button 
          variant="outlined" 
          fullWidth 
          startIcon={<AddShoppingCartIcon />}
          sx={{ 
            borderRadius: 1,
            py: 1,
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white'
            }
          }}
        >
          Create Shopping List
        </Button>
      </CardContent>
    </Card>
  );
}
