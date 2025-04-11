export interface NutrientData {
  consumed: number;
  goal: number;
  remaining: number;
}

export interface MealItem {
  id: string;
  name: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  icon: string;
}

export interface MealData {
  calories: number;
  items: MealItem[];
}

export interface DailyData {
  date: string;
  calories: NutrientData;
  protein: NutrientData;
  carbs: NutrientData;
  breakfast: MealData;
  lunch: MealData;
  dinner: MealData;
  snacks: MealData;
}

export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  tag: string;
  tagColor: string;
  ingredientsMatched: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface UserProfile {
  name: string;
  goal: string;
  target: number;
  weight: string;
  goalWeight: string;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  icon: string;
}

export interface FoodItem {
  id: string;
  name: string;
  serving: string;
  calories: number;
}

export interface NutritionData {
  weeklyProtein: number[];
  balance: {
    protein: number;
    carbs: number;
    fat: number;
  };
}
