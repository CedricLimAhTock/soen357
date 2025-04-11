import { useState } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Recipes from "@/pages/Recipes";
import LogFood from "@/pages/LogFood";
import Progress from "@/pages/Progress";
import Profile from "@/pages/Profile";
import AddFoodDialog from "./components/dialogs/AddFoodDialog";
import MainLayout from "./components/layout/MainLayout";

function Router() {
  const [addFoodOpen, setAddFoodOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  const handleOpenAddFood = (meal: string) => {
    setSelectedMeal(meal);
    setAddFoodOpen(true);
  };

  const handleCloseAddFood = () => {
    setAddFoodOpen(false);
  };

  return (
    <>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Home onAddFood={handleOpenAddFood} />
          </MainLayout>
        </Route>
        <Route path="/recipes">
          <MainLayout>
            <Recipes />
          </MainLayout>
        </Route>
        <Route path="/log-food">
          <MainLayout>
            <LogFood onAddFood={handleOpenAddFood} />
          </MainLayout>
        </Route>
        <Route path="/progress">
          <MainLayout>
            <Progress />
          </MainLayout>
        </Route>
        <Route path="/profile">
          <MainLayout>
            <Profile />
          </MainLayout>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      
      <AddFoodDialog 
        open={addFoodOpen} 
        onClose={handleCloseAddFood} 
        meal={selectedMeal} 
      />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
