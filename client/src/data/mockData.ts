import { DailyData, Recipe, UserProfile, Ingredient, FoodItem, NutritionData } from '../types';

// Daily tracking data
export const dailyData: DailyData = {
  date: 'March 22, 2025',
  calories: {
    consumed: 1420,
    goal: 2200,
    remaining: 780
  },
  protein: {
    consumed: 109,
    goal: 145,
    remaining: 36
  },
  carbs: {
    consumed: 178,
    goal: 240,
    remaining: 62
  },
  breakfast: {
    calories: 420,
    items: [
      {
        id: 'b1',
        name: 'Oatmeal with Berries',
        serving: '1 serving (250g)',
        calories: 320,
        protein: 12,
        carbs: 45,
        fat: 8,
        icon: 'breakfast_dining'
      },
      {
        id: 'b2',
        name: 'Coffee with Milk',
        serving: '1 cup (240ml)',
        calories: 100,
        protein: 3,
        carbs: 5,
        fat: 7,
        icon: 'coffee'
      }
    ]
  },
  lunch: {
    calories: 680,
    items: [
      {
        id: 'l1',
        name: 'Grilled Chicken Salad',
        serving: '1 bowl (350g)',
        calories: 480,
        protein: 42,
        carbs: 18,
        fat: 28,
        icon: 'lunch_dining'
      },
      {
        id: 'l2',
        name: 'Whole Grain Bread',
        serving: '1 slice (40g)',
        calories: 100,
        protein: 5,
        carbs: 18,
        fat: 1,
        icon: 'bakery_dining'
      },
      {
        id: 'l3',
        name: 'Apple Juice',
        serving: '1 glass (200ml)',
        calories: 100,
        protein: 0,
        carbs: 25,
        fat: 0,
        icon: 'water_drop'
      }
    ]
  },
  dinner: {
    calories: 320,
    items: [
      {
        id: 'd1',
        name: 'Baked Salmon',
        serving: '1 fillet (120g)',
        calories: 220,
        protein: 26,
        carbs: 0,
        fat: 12,
        icon: 'dinner_dining'
      },
      {
        id: 'd2',
        name: 'Steamed Vegetables',
        serving: '1 serving (150g)',
        calories: 100,
        protein: 4,
        carbs: 18,
        fat: 1,
        icon: 'spa'
      }
    ]
  },
  snacks: {
    calories: 0,
    items: []
  }
};

// Recipe recommendations
export const recipeRecommendations: Recipe[] = [
  {
    id: 'r1',
    name: 'Balanced Protein Bowl',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    tag: 'Matches Goal',
    tagColor: 'green',
    ingredientsMatched: 5,
    calories: 420,
    protein: 28,
    carbs: 42,
    fat: 18
  },
  {
    id: 'r2',
    name: 'Veggie Stir Fry',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    tag: 'Low Calorie',
    tagColor: 'blue',
    ingredientsMatched: 7,
    calories: 320,
    protein: 12,
    carbs: 38,
    fat: 14
  }
];

// User profile
export const userProfile: UserProfile = {
  name: 'Alex Johnson',
  goal: 'Weight Loss Program',
  target: 2200,
  weight: '78.5 kg',
  goalWeight: '72 kg'
};

// Ingredient inventory
export const ingredients: Ingredient[] = [
  { id: 'i1', name: 'Eggs', quantity: '12', icon: 'egg' },
  { id: 'i2', name: 'Oatmeal', quantity: '500g', icon: 'breakfast_dining' },
  { id: 'i3', name: 'Chicken Breast', quantity: '400g', icon: 'restaurant' },
  { id: 'i4', name: 'Salmon', quantity: '300g', icon: 'set_meal' },
  { id: 'i5', name: 'Spinach', quantity: '200g', icon: 'spa' },
  { id: 'i6', name: 'Whole Grain Bread', quantity: '1 loaf', icon: 'bakery_dining' },
  { id: 'i7', name: 'Broccoli', quantity: '300g', icon: 'local_florist' }
];

// Food search items
export const foodItems: FoodItem[] = [
  { id: 'f1', name: 'Grilled Chicken Breast', serving: '100g', calories: 165 },
  { id: 'f2', name: 'Brown Rice', serving: '100g, cooked', calories: 112 },
  { id: 'f3', name: 'Avocado', serving: '1 medium', calories: 240 },
  { id: 'f4', name: 'Greek Yogurt', serving: '100g', calories: 59 }
];

// Nutrition insights data
export const nutritionData: NutritionData = {
  weeklyProtein: [60, 80, 70, 90, 65, 75, 50],
  balance: {
    protein: 35,
    carbs: 25,
    fat: 40
  }
};
