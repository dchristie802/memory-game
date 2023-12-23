import { AppThemeProvider } from './providers/app-theme-provider';
import { MainMenuScreen } from './Screens';

function App() {
  return (
    <AppThemeProvider>
      <MainMenuScreen />
    </AppThemeProvider>
  );
}

export default App;
