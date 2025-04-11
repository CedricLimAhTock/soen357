import { Box, Container } from '@mui/material';
import AppBar from './AppBar';
import BottomNavigation from './BottomNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      <Container
        component="main"
        sx={{
          flex: '1 0 auto',
          py: 3,
          mb: { xs: 7, md: 0 }, // Add bottom margin on mobile for bottom navigation
        }}
        maxWidth="xl"
      >
        {children}
      </Container>
      <BottomNavigation />
    </Box>
  );
}
